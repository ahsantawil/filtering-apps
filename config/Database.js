const {Sequelize } = require('sequelize');

const db = new Sequelize('db_filter', 'root', '', {
    host : 'localhost',
    dialect: 'mysql'
});

export default db;

(async() => {
    await db.sync();
})();