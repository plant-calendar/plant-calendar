import Sequelize from 'sequelize/lib/sequelize';
import db from '../../db';

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
    unique: true,
  },
  thirdPartyId: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true,
  },
});

export default User;
