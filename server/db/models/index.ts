import Habitat from '../models/habitat/habitat';
import HabitatSubscription from '../models/habitatSubsription/habitatSubscription';
import Plant from '../models/plant/plant';
import PlantSubscription from '../models/plantSubscription/plantSubscription';
import User from '../models/user/user';

User.hasMany(HabitatSubscription);
Habitat.hasMany(HabitatSubscription);
User.hasMany(PlantSubscription);
Plant.hasMany(PlantSubscription);
Plant.belongsTo(Habitat);
Habitat.hasMany(Plant);

export { Habitat, HabitatSubscription, Plant, PlantSubscription, User };
