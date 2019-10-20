const Sequelize = require('sequelize');
const db = require('../../db');

export default db.define('plant', {
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
    allowNull: false,
  },
  wateredBy: {
    type: Sequelize.INTEGER,
  },
});

//need to make a Sequelize hook to give defaultValue of today if lastWatered is null.
