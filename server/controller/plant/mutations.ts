import PlantService from "../../service/plant.service";
import {configs, plantType} from "./types";

const plantService = new PlantService();

const plantMutation = {
  args: {
    habitatId: configs.habitatIdConfig,
    name: configs.nameConfig,
    lastWatered: configs.lastWateredConfig,
    waterInterval: configs.waterIntervalConfig,
    id: configs.idConfig,
  },
  resolve: (_, args) => {
    console.log('hello!!!!!!!');
    return plantService.updateOne(args.id, args);
  },
  type: plantType,
};

export {plantMutation};