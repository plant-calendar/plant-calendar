import Sequelize from 'sequelize';
import db from '../../db';

const HabitatSubscription = db.define('habitatSubscription', {
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  status: {
    type: Sequelize.ENUM('pending', 'rejected', 'active', 'inactive'),
    defaultValue: 'pending',
  },
});

export default HabitatSubscription;
