// import { SubProductItem } from "./SubProductItem";
// import { Object3D } from "three";
import { Model3D } from "./Model3D";

export interface ProductItem {
  id: number;
  // A unique name used to identify the product item from routing.
  name: string;
  // thumbnail: string;
  models: Model3D[];
  // If true, the camera can't look at the underside of the model.
  hasFloor: boolean;
  useGammaSpace: boolean;
  // tooltip: string;
  // subItems: SubProductItem[];
  // selectedSubItem?: SubProductItem | number | null;
  // The root object3D
  object3D?: any;
}
