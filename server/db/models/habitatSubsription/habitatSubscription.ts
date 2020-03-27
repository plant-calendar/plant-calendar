import Sequelize from 'sequelize/lib/sequelize';
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
  subscriberAccepted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  adminAccepted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

export default HabitatSubscription;
