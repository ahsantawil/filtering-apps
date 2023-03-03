const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/Database.js');

const Supliers = db.define('Suplier', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [4, 50]
    }
  },
  phone: {
    type: DataTypes.STRING,
    validate: {
        len: [6-15]
    }
  },
}, {
  freezeTableName: true
});

export default Supliers;