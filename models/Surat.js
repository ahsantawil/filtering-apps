const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/Database.js');

const Surats = db.define('Surat', {
  // Model attributes are defined here
  kemasan: {
    type: DataTypes.STRING,
  },
  qty: {
    type: DataTypes.STRING,
    validate: {
        len: [0-15]
    }
  },
  name: {
    type: DataTypes.STRING,
    validate: {
        len: [0-15]
    }
  },
  po_qty: {
    type: DataTypes.INTEGER,
    validate: {
        len: [0-15]
    }
  },
  sisa_po: {
    type: DataTypes.INTEGER,
    validate: {
        len: [0-15]
    }
  },
  type: {
    type: DataTypes.STRING,
  },
  total: {
    type: DataTypes.INTEGER,
    validate: {
        len: [0-15]
    }
  },
}, {
  freezeTableName: true
});

export default Surats;