import { ProductConfigurator } from "./ProductConfigurator";
import { ProductItem } from "./models/ProductItem";
import { MeshLoader } from "./MeshLoader";
import { ProductConfiguratorService } from "../product-configurator.service";
import { ProductConfigurationEvent } from "../product-configurator-events";
import { Box3, Object3D, Vector3 } from "three";
import { EnvironmentMapLoader } from "./EnvironmentMapLoader";
import { Model3D } from "./models/Model3D";
import { ModelLoadedEventData } from "./models/EventData/ModelLoadedEventData";
import * as THREE from 'three'

export class ProductChanger {
  private readonly productConfigurator: ProductConfigurator;
  private readonly productConfiguratorService: ProductConfiguratorService;

  private readonly environmentMapLoader: EnvironmentMapLoader;

  constructor(productConfigurator: ProductConfigurator) {
    this.productConfigurator = productConfigurator;
    this.productConfiguratorService = this.productConfigurator.productConfiguratorService;

    this.environmentMapLoader = new EnvironmentMapLoader(productConfigurator);

    this.productConfiguratorService.getSubject( ProductConfigurationEvent.Toolbar_ChangeProduct )
      .subscribe((product: ProductItem) => {
        this.changeProduct(product);
      });
  }

  /**
   * Change the visible product to the input product.
   */
  public async changeProduct(product: ProductItem): Promise<void> {
    // No need to do anything if the product is the same!
    this.productConfiguratorService.selectedProduct = product;
    const meshLoader = new MeshLoader(this.productConfiguratorService, this.environmentMapLoader);
    let obj: any;
      this.productConfiguratorService.dispatch(ProductConfigurationEvent.Loading_Started);

      obj = new Object3D();
      const promises: Promise<ModelLoadedEventData>[] = [];

      for (const model of product.models) {
        promises.push(meshLoader.loadMesh(model, this.productConfigurator.extras));
      }

      const loadedModels: ModelLoadedEventData[] = await Promise.all(promises);

      for (const loadedModel of loadedModels) {
        this.setMeshTransform(loadedModel.object, loadedModel.model);
        obj.attach(loadedModel.object);
      }
      // Finally set the whole object at origin.
      this.setObjectAtOrigin(obj);

      this.productConfiguratorService.dispatch(ProductConfigurationEvent.Loading_Finished);
      product.object3D = obj;
      this.productConfigurator.scene.add(obj);
      this.playAnimations(obj)
      this.toggleGammeSpace( product.useGammaSpace );
      // Update camera position
      this.updateCameraPosition(obj, product.hasFloor);

    return;
  }
  public playAnimations(obj){
    obj.children.forEach(group => {
      group.children.forEach((mesh)=>{
        if(mesh.name == "N_extra_frontLoader"){
          setTimeout(()=>{
            var group = mesh.parent;
            const mixer = new THREE.AnimationMixer(group);
            const clip = group.animations[0];
            const action = mixer.clipAction(clip);
            action.setLoop(THREE.LoopPingPong,2);
            if(!action.isRunning()){
              mixer.stopAllAction();
              action.play();
            }
          },5000)
        }
      })
    });
  }
  /**
   * Set position, rotation and scale for the object.
   */
  public setMeshTransform(object: any, model: Model3D) {
    if (model.position) {
      object.position.add(model.position);
    }
    if (model.rotation) {
      object.rotation.copy(model.rotation);
    }
    if (model.scale) {
      object.scale.copy(model.scale);
    }
  }

  /**
   * Position the object at 0, 0, 0
   */
  public  setObjectAtOrigin(object: any) {
    const box = new Box3().setFromObject(object);
    const center = box.getCenter(new Vector3());

    object.position.x = (object.position.x - center.x);
    object.position.y = (object.position.y - center.y);
    object.position.z = (object.position.z - center.z);
  }

  /**
   *
   * @param object
   * @param hasFloor If the object has a floor. Meaning camera can't look from below.
   */
  public updateCameraPosition(object: any, hasFloor: boolean) {
     const camera = this.productConfigurator.camera;
    const cameraControls = this.productConfigurator.cameraControls;

    const box = new Box3().setFromObject(object);
    const size = box.getSize(new Vector3()).length();

    camera.near = size / 100;
    camera.far = size * 100;
    camera.updateProjectionMatrix();

    // Force the camera to be at certain distance.
    cameraControls.maxDistance = size * 1.15;
    cameraControls.minDistance = size * 1.15;

    cameraControls.update();

    cameraControls.maxDistance = size * 4;
    cameraControls.minDistance = size * 0.25;

    cameraControls.maxPolarAngle = hasFloor ?  Math.PI * 0.5 : Math.PI;
    camera.zoom = 3
    cameraControls.update();
  }

  /**
   * Toggle between gamma space.
   * Also changes the intensity of the lights because the light intensity is different between the spaces.
   * @param value
   */
  public toggleGammeSpace(value): void {
    if (this.productConfigurator.renderer.gammaOutput === value) {
      return;
    }

    this.productConfigurator.renderer.gammaOutput = value;
    // light.intensity * factor
    // default is gamma -> non-gamma space
    let factor = this.productConfigurator.lightIntensityFactor;
    // Changing from non-gamma -> gamma
    if (value) {
      factor = 1 / this.productConfigurator.lightIntensityFactor;
    }
    for (const light of this.productConfigurator.lights) {
      light.intensity *= 1.5;
    }
  }
}
