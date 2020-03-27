import Sequelize from 'sequelize/lib/sequelize';
import db from '../../db';

const Habitat = db.define('habitat', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

export default Habitat;
