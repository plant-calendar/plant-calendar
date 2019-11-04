import {IPlant} from "../../server/db/models/plant/plant.interface";

export const plantDataAccessors = {
    daysSinceWatered(plant: IPlant | { lastWatered: number, waterInterval: number }) {
      if (!plant.lastWatered) {
        return 0;
      }
      // last watered may be a milliseconds number-string already... this actually might be something we need to fix
      // @ts-ignore
      const lastWateredMilliseconds = !Number.isNaN(parseInt(plant.lastWatered, 10))
        ? plant.lastWatered
        // @ts-ignore
        : plant.lastWatered.getTime();
      const millisecondsSinceLastWatered = (new Date()).getTime() - lastWateredMilliseconds;
      return Math.round(millisecondsSinceLastWatered / (1000 * 60 * 60 * 24));
    },
};