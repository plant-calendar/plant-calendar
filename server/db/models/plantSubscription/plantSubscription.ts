import Sequelize from 'sequelize';
import db from '../../db';

const PlantSubscription = db.define('plantSubscription', {
  status: {
    type: Sequelize.ENUM('pending', 'approved', 'rejected'),
    defaultValue: 'pending',
  },
});

export default PlantSubscription;
