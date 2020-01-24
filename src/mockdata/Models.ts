import { Model3D } from "../app/3D/models/Model3D";
import {
  platformModelInfo, tyresEngineTanksModelInfo, extraTyresModelInfo,
  extraFrontLoaderModelInfo, audioACModelInfo, backEndModelInfo, extraEquipmentModelInfo,
  steeringPedalsCockpitModelInfo, cabinModelInfo, extraRearSteeringModelInfo,
  seatsModelInfo, engineHoodModelInfo, glassModelInfo, armModelInfo, tyreEngineTankModelInfo,
  extraLightModelInfo, smartTouchModelInfo, extraSmartTouchModelInfo, armJoyStickModelInfo, sidePanelModelInfo
} from "./ModelsLoadInfo";

export const getplatformModelInfo: () => Model3D = () => {
  return { ...platformModelInfo };
};

export const getSeatsModelInfo: () => Model3D = () => {
  return { ...seatsModelInfo };
};

export const getSteeringPedalsCockpitModelInfo: () => Model3D = () => {
  return { ...steeringPedalsCockpitModelInfo };
};

export const getCabinModelInfo: () => Model3D = () => {
  return { ...cabinModelInfo };
};

export const getTyresEngineTanksModelInfo: () => Model3D = () => {
  return { ...tyresEngineTanksModelInfo };
};

export const getarmJoyStickModelInfo: () => Model3D = () =>{
  return {...armJoyStickModelInfo}
}

export const getExtraTyresModelInfo: () => Model3D = () => {
  return { ...extraTyresModelInfo };
};

export const getExtraFrontLoaderModel: () => Model3D = () => {
  return { ...extraFrontLoaderModelInfo };
};

export const getEngineHoodModel: () => Model3D = () => {
  return { ...engineHoodModelInfo };
};

export const getBackEndModelInfo: () => Model3D = () => {
  return { ...backEndModelInfo };
};

export const getGlassModel: () => Model3D = () => {
  return { ...glassModelInfo };
};

export const getArmModel: () => Model3D = () => {
  return { ...armModelInfo };
};

export const getTyreEngineTankModel: () => Model3D = () => {
  return { ...tyreEngineTankModelInfo };
};

export const getExtraLightModelInfo: () => Model3D = () => {
  return { ...extraLightModelInfo };
};

export const getSmartTouchModelInfo: () => Model3D = () => {
  return { ...smartTouchModelInfo };
};

export const getExtraSmartTouchInfo: () => Model3D = () => {
  return { ...extraSmartTouchModelInfo };
};

export const getAudioACModelInfo: () => Model3D = () => {
  return { ...audioACModelInfo };
};

export const getExtraEquipmentModelInfo: () => Model3D = () => {
  return { ...extraEquipmentModelInfo };
};

export const getExtraRearSteeringModelInfo: () => Model3D = () => {
  return { ...extraRearSteeringModelInfo };
};

export const getSidePanelModelInfo: () => Model3D = () => {
  return { ...sidePanelModelInfo };
};