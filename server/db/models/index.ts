import Habitat from '../models/habitat/habitat';
import HabitatSubscription from '../models/habitatSubsription/habitatSubscription';
import Plant from '../models/plant/plant';
import PlantSubscription from '../models/plantSubscription/plantSubscription';
import User from '../models/user/user';

User.belongsToMany(Habitat, { through: HabitatSubscription });
Habitat.belongsToMany(User, { through: HabitatSubscription });
User.belongsToMany(Plant, { through: PlantSubscription });
Plant.belongsToMany(User, { through: PlantSubscription });
Plant.belongsTo(Habitat);
Habitat.hasMany(Plant);

export { Habitat, HabitatSubscription, Plant, PlantSubscription, User };
