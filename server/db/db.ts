const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/plant-calendar`,
  {
    logging: false,
  }
);

module.exports = sequelize;
