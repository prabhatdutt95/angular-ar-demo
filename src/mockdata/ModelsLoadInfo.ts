import { MaterialInfo } from "../app/3D/models/MaterialInfo";

export interface Model3DLoadInfo {
  filename: string;
  materialInfo: MaterialInfo;
}

export const platformModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_platform.fbx",
  materialInfo: {
    renderBackface: true,
    normalTexture: "assets/textures/N_platform/N_platform__Normal.jpg",
    diffuseTexture: "assets/textures/N_platform/N_platform__BaseColor.jpg",
    lmTexture: "assets/textures/N_platform/N_platform_LM.jpg",
    ormTexture: "assets/textures/N_platform/N_platform__OcclusionRoughnessMetallic.png"
  },
};

export const extraFrontLoaderModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_extra_frontLoader.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_extra_frontLoader/N_extra_frontLoader__Normal.jpg",
    diffuseTexture: "assets/textures/N_extra_frontLoader/N_extra_frontLoader__BaseColor.jpg",
    lmTexture: "assets/textures/N_extra_frontLoader/N_extra_frontLoader_LM.jpg",
    ormTexture: "assets/textures/N_extra_frontLoader/N_extra_frontLoader__OcclusionRoughnessMetallic.png"
  },
};

export const seatsModelInfo: Model3DLoadInfo = {
 filename: "assets/tractorModels/N_seats.fbx",
  materialInfo: {
    normalTexture: "assets/textures/N_seats/N_seats__Normal.jpg",
    diffuseTexture: "assets/textures/N_seats/N_seats__BaseColor.jpg",
    lmTexture: "assets/textures/N_seats/N_seats_LM.jpg",
    ormTexture: "assets/textures/N_seats/N_seats__OcclusionRoughnessMetallic.png",
    renderBackface: false,
  },
};

export const steeringPedalsCockpitModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_steeringPedalsCockpit.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_steeringPedalsCockpit/N_steeringPedalsCockpit__Normal.jpg",
    diffuseTexture: "assets/textures/N_steeringPedalsCockpit/N_steeringPedalsCockpit__BaseColor.jpg",
    lmTexture: "assets/textures/N_steeringPedalsCockpit/N_steeringPedalsCockpit_LM.jpg",
    ormTexture: "assets/textures/N_steeringPedalsCockpit/N_steeringPedalsCockpit__OcclusionRoughnessMetallic.png"
  },
};

export const cabinModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_cabin.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_cabin/N_cabin__Normal.jpg",
    diffuseTexture: "assets/textures/N_cabin/N_cabin__BaseColor.jpg",
    lmTexture: "assets/textures/N_cabin/N_cabin_LM.jpg",
    ormTexture: "assets/textures/N_cabin/N_cabin__OcclusionRoughnessMetallic.png"
  },
};

export const tyresEngineTanksModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_tyresEngineTanks.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_tyresEngineTanks/N_tyresEngineTanks__Normal.jpg",
    diffuseTexture: "assets/textures/N_tyresEngineTanks/N_tyresEngineTanks__BaseColor.jpg",
    lmTexture: "assets/textures/N_tyresEngineTanks/N_tyresEngineTanks_LM.jpg",
    ormTexture: "assets/textures/N_tyresEngineTanks/N_tyresEngineTanks__OcclusionRoughnessMetallic.png"
  },
};

export const extraTyresModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_extra_tyres.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_extra_tyres/N_extra_tyres__Normal.jpg",
    diffuseTexture: "assets/textures/N_extra_tyres/N_extra_tyres__BaseColor.jpg",
    lmTexture: "assets/textures/N_extra_tyres/N_extra_tyres_LM.jpg",
    ormTexture: "assets/textures/N_extra_tyres/N_extra_tyres__OcclusionRoughnessMetallic.png"
  },
};

export const engineHoodModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_engineHood.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_engineHood/N_engineHood__Normal.jpg",
    diffuseTexture: "assets/textures/N_engineHood/N_engineHood__BaseColor.jpg",
    lmTexture: "assets/textures/N_engineHood/N_engineHood_LM.jpg",
    ormTexture: "assets/textures/N_engineHood/N_engineHood__OcclusionRoughnessMetallic.png"
  },
};

export const glassModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_glass.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_glass/N_glass__Normal.jpg",
    diffuseTexture: "assets/textures/N_glass/_N_glass__BaseColor.png",
    lmTexture: "assets/textures/N_glass/N_glass_LM.jpg",
    ormTexture: "assets/textures/N_glass/N_glass__OcclusionRoughnessMetallic.png"
  }, 
};

export const armModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_ARM.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_ARM/N_ARM__Normal.jpg",
    diffuseTexture: "assets/textures/N_ARM/N_ARM__BaseColor.jpg",
    lmTexture: "assets/textures/N_ARM/N_ARM_LM.jpg",
    ormTexture: "assets/textures/N_ARM/N_ARM__OcclusionRoughnessMetallic.png"
  },
};

export const tyreEngineTankModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_tyresEngineTanks.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_tyresEngineTanks/N_tyresEngineTanks__Normal.jpg",
    diffuseTexture: "assets/textures/N_tyresEngineTanks/N_tyresEngineTanks__BaseColor.jpg",
    lmTexture: "assets/textures/N_tyresEngineTanks/N_tyresEngineTanks_LM.jpg",
    ormTexture: "assets/textures/N_tyresEngineTanks/N_tyresEngineTanks__OcclusionRoughnessMetallic.png"
  },
};
export const armJoyStickModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_ARM_joysticksButtons.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_ARM_joysticksButtons/N_ARM_joysticksButtons__Normal.jpg",
    diffuseTexture: "assets/textures/N_ARM_joysticksButtons/N_ARM_joysticksButtons__BaseColor.jpg",
    lmTexture: "assets/textures/N_ARM_joysticksButtons/N_ARM_joysticksButtons_LM.jpg",
    ormTexture: "assets/textures/N_ARM_joysticksButtons/N_ARM_joysticksButtons__OcclusionRoughnessMetallic.png"
  },
};

export const extraLightModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_extra_lights.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_extra_lights/N_extra_lights__Normal.jpg",
    diffuseTexture: "assets/textures/N_extra_lights/N_extra_lights__BaseColor.png",
    lmTexture: "assets/textures/N_extra_lights/N_extra_lights_LM.jpg",
    ormTexture: "assets/textures/N_extra_lights/N_extra_lights__OcclusionRoughnessMetallic.png"
  },
};

export const smartTouchModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_SmartTouch.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_SmartTouch/N_SmartTouch__Normal.jpg",
    diffuseTexture: "assets/textures/N_SmartTouch/N_SmartTouch__BaseColor.jpg",
    lmTexture: "assets/textures/N_SmartTouch/N_SmartTouch_LM.jpg",
    ormTexture: "assets/textures/N_SmartTouch/N_SmartTouch__OcclusionRoughnessMetallic.png"
  },
};

export const extraSmartTouchModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_extra_SmartTouch.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_extra_SmartTouch/N_extra_SmartTouch__Normal.jpg",
    diffuseTexture: "assets/textures/N_extra_SmartTouch/N_extra_SmartTouch__BaseColor.jpg",
    lmTexture: "assets/textures/N_extra_SmartTouch/N_extra_SmartTouch_LM.jpg",
    ormTexture: "assets/textures/N_extra_SmartTouch/N_extra_SmartTouch__OcclusionRoughnessMetallic.png"
  },
};

export const audioACModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_audioAC.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_audioAC/N_audioAC__Normal.jpg",
    diffuseTexture: "assets/textures/N_audioAC/N_audioAC__BaseColor.jpg",
    lmTexture: "assets/textures/N_audioAC/N_audioAC_LM.jpg",
    ormTexture: "assets/textures/N_audioAC/N_audioAC__OcclusionRoughnessMetallic.png"
  },
};

export const backEndModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_backEnd.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_backEnd/N_backEnd__Normal.jpg",
    diffuseTexture: "assets/textures/N_backEnd/N_backEnd__BaseColor.jpg",
    lmTexture: "assets/textures/N_backEnd/N_backEnd_LM.jpg",
    ormTexture: "assets/textures/N_backEnd/N_backEnd__OcclusionRoughnessMetallic.png"
  },
};

export const extraEquipmentModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_extra_equipment.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_extra_equipment/N_extra_equipment__Normal.jpg",
    diffuseTexture: "assets/textures/N_extra_equipment/N_extra_equipment__BaseColor.jpg",
    lmTexture: "assets/textures/N_extra_equipment/N_extra_equipment_LM.jpg",
    ormTexture: "assets/textures/N_extra_equipment/N_extra_equipment__OcclusionRoughnessMetallic.png"
  },
};

export const extraRearSteeringModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_extra_rearSteering.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_extra_rearSteering/N_extra_rearSteering__Normal.jpg",
    diffuseTexture: "assets/textures/N_extra_rearSteering/N_extra_rearSteering__BaseColor.jpg",
    lmTexture: "assets/textures/N_extra_rearSteering/N_extra_rearSteering_LM.jpg",
    ormTexture: "assets/textures/N_extra_rearSteering/N_extra_rearSteering__OcclusionRoughnessMetallic.png"
  },
};

export const sidePanelModelInfo: Model3DLoadInfo = {
  filename: "assets/tractorModels/N_sidePanel.fbx",
  materialInfo: {
    renderBackface: false,
    normalTexture: "assets/textures/N_sidePanel/N_sidePanel__Normal.jpg",
    diffuseTexture: "assets/textures/N_sidePanel/N_sidePanel__BaseColor.jpg",
    lmTexture: "assets/textures/N_sidePanel/N_sidePanel_LM.jpg",
    ormTexture: "assets/textures/N_sidePanel/N_sidePanel__OcclusionRoughnessMetallic.png"
  },
};