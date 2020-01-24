import { ProductItem } from "../app/3D/models/ProductItem";
import { getTyresEngineTanksModelInfo, getExtraTyresModelInfo, getSteeringPedalsCockpitModelInfo, getAudioACModelInfo,
  getCabinModelInfo, getExtraFrontLoaderModel, getSeatsModelInfo, getplatformModelInfo, getExtraEquipmentModelInfo,
  getEngineHoodModel, getGlassModel, getArmModel, getTyreEngineTankModel, getExtraLightModelInfo,
  getSmartTouchModelInfo, getExtraSmartTouchInfo, getarmJoyStickModelInfo, getBackEndModelInfo,
  getExtraRearSteeringModelInfo, getSidePanelModelInfo } from "./Models";

export function createTractorModel(id: number): ProductItem {
  const cabin = getCabinModelInfo();
  const steeringWheelPedalsCockpit = getSteeringPedalsCockpitModelInfo();
  const tyresEngineTanks = getTyresEngineTanksModelInfo();
  const frontLoader = getExtraFrontLoaderModel();
  const seats = getSeatsModelInfo();
  const extraTyre = getExtraTyresModelInfo();
  const platform = getplatformModelInfo();
  const engineHood =  getEngineHoodModel();
  const glassModel = getGlassModel();
  const arm = getArmModel();
  const tyreEngineTank = getTyreEngineTankModel();
  const extraLight= getExtraLightModelInfo();
  const smartTouch = getSmartTouchModelInfo();
  const extraSmartTouch = getExtraSmartTouchInfo();
  const armJoyStick = getarmJoyStickModelInfo();
  const audioAC = getAudioACModelInfo();
  const backEnd = getBackEndModelInfo();
  const extraEquipment = getExtraEquipmentModelInfo();
  const extraRearSteering = getExtraRearSteeringModelInfo();
  const sidePanel = getSidePanelModelInfo();
  return {
    id,
    name: "table2",
    // thumbnail: "assets/images/tyres.PNG",
    models: [cabin, tyresEngineTanks, steeringWheelPedalsCockpit, seats, platform, glassModel, audioAC, backEnd, extraEquipment,
      engineHood, arm, tyreEngineTank, smartTouch, extraSmartTouch, armJoyStick, extraRearSteering, sidePanel ],
    hasFloor: false,
    useGammaSpace: true,
    // tooltip: "",
    // subItems: [],
  };
}
