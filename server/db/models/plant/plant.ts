const Sequelize = require('sequelize');
import db from '../../db';

const Plant = db.define('plant', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  waterInterval: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastWatered: {
    type: Sequelize.DATE,
    defaultValue: Date.now(),
  },
  wateredBy: {
    type: Sequelize.INTEGER,
  },
});

export default Plant;
