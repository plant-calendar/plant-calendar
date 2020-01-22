import Sequelize from 'sequelize';
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
});

export default Habitat;
