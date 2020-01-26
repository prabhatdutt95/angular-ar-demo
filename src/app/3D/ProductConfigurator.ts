import { Color, DirectionalLight, AmbientLight, Light, PerspectiveCamera, Scene, WebGLRenderer,CanvasTexture } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ProductConfiguratorService } from "../product-configurator.service";
import { ProductChanger } from "./ProductChanger";
// import { TextureChanger } from "./TextureChanger";
import { Injectable } from "@angular/core";
// import { ActivatedRoute, Router, ExtraOptions } from "@angular/router";

import { getExtraFrontLoaderModel, getExtraLightModelInfo, getExtraTyresModelInfo, getExtraRearSteeringModelInfo} from "../../../src/mockdata/Models";

@Injectable({
  providedIn: "root"
})
export class ProductConfigurator {
  public productConfiguratorService: ProductConfiguratorService;
  // public activatedRouter: ActivatedRoute;
  public extras = [];
  // public router: Router;

  public renderer: WebGLRenderer;
  public scene: Scene;
  public camera: PerspectiveCamera;
  public cameraControls: OrbitControls;

  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;

  public lights: Light[] = [];

  public lightIntensityFactor: number;

  private productChanger: ProductChanger;
  // private textureChanger: TextureChanger;
  
  constructor(renderer: WebGLRenderer,
              productConfiguratorService: ProductConfiguratorService,
              // activatedRoute: ActivatedRoute,
              // router: Router,
              extras?) {
    this.renderer = renderer;
    this.productConfiguratorService = productConfiguratorService;
    // this.activatedRouter = activatedRoute;
    // this.router = router;
    this.extras = extras?extras:[];

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(new Color(0xFFFFFF));
    this.renderer.gammaFactor = 2.2
    this.scene = new Scene();
    const aspectRatio = window.innerWidth / window.innerHeight;
    this.camera = new PerspectiveCamera(30, aspectRatio, 20, 5000);
    this.camera.position.z = 100;

    this.scene.add(this.camera);

    this.cameraControls = new OrbitControls(this.camera, this.renderer.domElement);
    this.cameraControls.maxPolarAngle = Math.PI;
    this.cameraControls.minPolarAngle = 0;
    this.cameraControls.enablePan = false;
    this.cameraControls.update();


    this.initLights();
                
    this.productChanger = new ProductChanger(this);

    // const snapshot = this.activatedRouter.snapshot;
    const selectedItem = this.productConfiguratorService.items[0];
    if(this.extras.length!==0){
      if(this.extras[0]){
        selectedItem.models.push(getExtraTyresModelInfo())
      }
      else{
        selectedItem.models = selectedItem.models.filter((model)=>{
          return model.filename!="assets/tractorModels/N_extra_tyres.fbx"
        })
      }
      if(this.extras[1]){
        selectedItem.models.push(getExtraFrontLoaderModel())
      }
      else{
        selectedItem.models = selectedItem.models.filter((model)=>{
          return model.filename!="assets/tractorModels/N_extra_frontLoader.fbx"
        })
      }
      if(this.extras[2]){
        selectedItem.models.push(getExtraLightModelInfo())
      }
      else{
        selectedItem.models = selectedItem.models.filter((model)=>{
          return model.filename!="assets/tractorModels/N_extra_lights.fbx"
        })
      }
      if(this.extras[3]){
        selectedItem.models.push(getExtraRearSteeringModelInfo())
      }
      else{
        selectedItem.models = selectedItem.models.filter((model)=>{
          return model.filename!="assets/tractorModels/N_extra_rearSteering.fbx"
        })
      }
    
      
    }
    this.productChanger.changeProduct(selectedItem);

    // this.textureChanger = new TextureChanger(this.productConfiguratorService);

    this.initEvents();

    this.startRenderLoop();
  }

  public startRenderLoop() {
    const renderFunction = () => {
      this.cameraControls.update();

      this.renderer.render(this.scene, this.camera);

      requestAnimationFrame(renderFunction);
    };

    requestAnimationFrame(renderFunction);

    
  }

  public addExtras(extras, selectedItem){
    this.extras = extras;
  }

  public initLights() {
    // UE4 said ~285, set up 3 lights using UE4 to easier visualize direction.
    const height = 285;

    const intensity = 0.7;
    const fillIntensity = intensity / 2;
    const backIntensity = intensity / 4;

    const gammaSpaceIntensity = 0.3;
    this.lightIntensityFactor = intensity / gammaSpaceIntensity;

    const keyLight = new DirectionalLight(0xFFFFFF, intensity);
    keyLight.position.set(-247, height, 209);
    keyLight.position.normalize();
    keyLight.castShadow = true;

    const fillLight = new DirectionalLight(0xFFFFFF, fillIntensity);
    fillLight.position.set(212, height, 250);
    fillLight.position.normalize();
    fillLight.castShadow = true;

    const backLight = new DirectionalLight(0xFFFFFF, backIntensity);
    backLight.position.set(-153, height, -183);
    backLight.position.normalize();
    backLight.castShadow = true;
    // const light = new AmbientLight( 0xd5d6d8 );
    // light.intensity = 0.7
    // this.scene.add(light);
    this.scene.add(keyLight, fillLight, backLight);
    this.lights.push(keyLight, fillLight, backLight);
  }

  /**
   * Init events like window.resize
   */
  public initEvents() {
    window.addEventListener("resize", () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    });
  }
}
