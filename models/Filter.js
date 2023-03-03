const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/Database.js');

const Filters = db.define('Filter', {
  // Model attributes are defined here
  sn: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [4, 50]
    }
  },
  no_sj: {
    type: DataTypes.STRING,
    validate: {
        len: [6-20]
    }
  },
}, {
  freezeTableName: true
});

export default Filters;