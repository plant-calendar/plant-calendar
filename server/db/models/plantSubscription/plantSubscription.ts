import Sequelize from 'sequelize/lib/sequelize';
import db from '../../db';

const PlantSubscription = db.define('plantSubscription', {
  status: {
    type: Sequelize.ENUM('active', 'inactive'),
    defaultValue: 'active',
  },
});

export default PlantSubscription;
