const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/Database.js');

const Users = db.define('User', {
  // Model attributes are defined here
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [4, 50]
    }
  },
  username: {
    type: DataTypes.STRING,
    validate: {
        len: [6-20]
    }
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true
});

export default Users;