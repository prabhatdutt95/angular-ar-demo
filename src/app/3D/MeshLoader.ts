import {
  DoubleSide,
  Group,
  Material,
  Mesh,
  MeshPhongMaterial,
  MeshStandardMaterial,
  // Object3D,
  TextureLoader,
  WebGLRenderTarget,
  MeshPhysicalMaterial
} from "three";
import * as THREE from "three";
import { MaterialCreator, MTLLoader } from "three/examples/jsm/loaders/MTLLoader";


import { MaterialInfo } from "./models/MaterialInfo";
import { FBXLoader } from "three/examples/jsm/loaders/FBXloader";
import { EnvironmentMapLoader } from "./EnvironmentMapLoader";
import { ProductConfiguratorService } from "../product-configurator.service";
import { getOnProgressCallback } from "./getOnProgressCallback";
import { Model3D } from "./models/Model3D";
import { ModelLoadedEventData } from "./models/EventData/ModelLoadedEventData";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export class MeshLoader {

  private readonly productConfiguratorService: ProductConfiguratorService;
  private readonly environmentLoader: EnvironmentMapLoader;

  constructor(productConfiguratorService: ProductConfiguratorService, environmentLoader: EnvironmentMapLoader) {
    this.productConfiguratorService = productConfiguratorService;
    this.environmentLoader = environmentLoader;
  }

  /**
   * Loads an .obj mesh with either an mtl file or raw textures.
   * @param file The filename
   * @param materialInfo The material information such as path to mtl file, textures
   * @param onMeshLoaded When the mesh has loaded.
   */
  public loadMesh(model: Model3D, color:any[]): Promise<ModelLoadedEventData> {
    const promise = new Promise<ModelLoadedEventData>(async (resolve, reject) => {

      const fileParts: string[] = model.filename.split(".");
      const fileExtension = fileParts[ fileParts.length - 1 ].toLowerCase();

      let object: any = null;
      if (fileExtension === "fbx") {
        object = await this.loadFBX(model.filename, model.materialInfo, color);
      }

      resolve({
        object,
        model
      });
    });
    return promise;
  }

  /**
   * Loads the material based on the MaterialInfo input.
   * @param object
   * @param materialInfo
   */
  public async loadMaterial(object: any, materialInfo: any,colorInput:any[]): Promise<void> {
    const promise = new Promise<void>((resolve, reject) => {
      if (materialInfo.mtl) {
        const mtlLoader = new MTLLoader();
        // Load the MTL file.
        mtlLoader.load(materialInfo.mtl, (materialCreator: MaterialCreator) => {

          // Load the materials
          materialCreator.preload();

          object.children.forEach((child) => {
            const mesh = child as Mesh;
            
            if (!mesh) {
              return;
            }
            const name: string = (mesh.material as Material).name;
           
            if (materialCreator.materials[ name ]) {
              mesh.material = materialCreator.materials[ name ];
            }
          });

          if (materialInfo.renderBackface) {
            this.trySetBackfaceRendering([ object ]);
          }

          resolve();
        });
      } else {

        const material = new MeshPhysicalMaterial({});

        const textureLoader = new TextureLoader();

        const baseColorTexture = textureLoader.load(materialInfo.diffuseTexture);
        baseColorTexture.encoding = THREE.sRGBEncoding;
        material.map = baseColorTexture;
        if (materialInfo.normalTexture) {
          material.normalMap = textureLoader.load(materialInfo.normalTexture);
        }
        if(materialInfo.lmTexture){
          material.lightMap = textureLoader.load(materialInfo.lightMap)
        }
        if(materialInfo.ormTexture){
          material.roughnessMap = textureLoader.load(materialInfo.ormTexture);
          material.aoMap = textureLoader.load(materialInfo.ormTexture);
          material.metalnessMap = textureLoader.load(materialInfo.ormTexture);
        }
        material.color.convertSRGBToLinear()
        
        object.children.forEach((child) => {
          const mesh = child as Mesh;
          if (!mesh) {
            return;
          }
          const colorCodes = [
            {color:"yellow", code:0xfff000}, 
            {color:"white", code:0xffffff},
            {color:"red", code:0xff0000},
            {color:"blue", code:0x0000ff},
            {color:"green", code:0x00ff00}]
          if(mesh.name === 'N_cabin'  || mesh.name=='N_engineHood'){
            mesh.material[0] = material;
            var temp = new MeshPhysicalMaterial({});
            if(colorInput[4]){
              for(let i=0;i<colorCodes.length;i++){
                if(colorCodes[i].color == colorInput[4].toLowerCase()){
                  temp.color = new THREE.Color( colorCodes[i].code );
                  break;
                }
              }
            }else{
              temp.color = new THREE.Color( 0xffffff );
            }
            
            mesh.material[1] = temp;
          }else{
            mesh.material = material;
          }
          if(mesh.name=="N_glass" || mesh.name=='N_extra_lights'){
            material.transparent=true;
          }
          if (mesh.name === 'N_extra_frontLoader') {
            // skinning must be set true with skinned animations
            // if not, animation wont play
            material.skinning = true
          }
          if(mesh.name === 'N_cabin'  || mesh.name=='N_engineHood'){
            material.color = new THREE.Color( 0xffffff ).convertSRGBToLinear();
          }
        });

        if (materialInfo.renderBackface) {
          this.trySetBackfaceRendering([ object ]);
        }

        resolve();
      }
    });

    return promise;
  }

  /**
   * Loads an OBJ file and the sets the material.
   * @param file
   * @param materialInfo
   */
  

  private async loadFBX(file: string, materialInfo: MaterialInfo, color:any[]): Promise<any> {
    const promise: Promise<any> = new Promise(async (resolve, reject) => {
      const fbxloader = new FBXLoader();
      // TODO: Add error handling.
      fbxloader.load( file, async (group: Group) => {
        await this.loadMaterial(group, materialInfo,color);
        this.setReceiveShadows([ group ] );
        resolve(group);
      }, getOnProgressCallback(this.productConfiguratorService));
    });

    return promise;
  }

  private async loadGlTF(file: string, materialInfo: MaterialInfo): Promise<any> {
    const promise: Promise<any> = new Promise(async (resolve, reject) => {
      const loader = new GLTFLoader();

      const environmentMapUrl: string = "assets/models/pbr/Soft_4TubeBank_2BlackFlags.exr";

      const environmentPromise = this.environmentLoader.loadEnvironment(environmentMapUrl);
      // TODO: Add error handling.
      loader.load( file, async (gltfObject: GLTF) => {
        // Set the environment texture
        environmentPromise.then((texture: WebGLRenderTarget) => {
          const rootObject = new Group();
          for (const scene of gltfObject.scenes) {
              rootObject.add(...scene.children);
          }

          this.setReceiveShadows(rootObject.children);
          this.trySetEnvironmentTexture(rootObject.children, texture);

          if (materialInfo.renderBackface) {
            this.trySetBackfaceRendering(rootObject.children);
          }

          resolve(rootObject);
        });
      }, getOnProgressCallback(this.productConfiguratorService));
    });

    return promise;
  }

  private setReceiveShadows(children: any[]): void {
    for (const child of children) {
      child.receiveShadow = true;
      child.castShadow = true;

      if (child.children) {
        this.setReceiveShadows(child.children);
      }
    }
  }

  private trySetEnvironmentTexture( children: any[], texture: WebGLRenderTarget): void {
    for (const child of children) {
      const mesh = child as Mesh;
      if (mesh.material) {
        const material = mesh.material as MeshStandardMaterial;
        material.envMap = texture.texture;
        material.envMapIntensity = 0.33;
        material.needsUpdate = true;
      }

      if (child.children) {
        this.trySetEnvironmentTexture(child.children, texture);
      }
    }
  }
  private trySetBackfaceRendering(children: any[]) {
    for (const child of children) {
      const mesh = child as Mesh;
      if (mesh.material) {
        (mesh.material as Material).side = DoubleSide;
      }

      if (child.children) {
        this.trySetBackfaceRendering(child.children);
      }
    }
  }
}
