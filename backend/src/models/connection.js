const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    port: 3306,
});

const tasks = sequelize.define('tasks', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('Pending', 'Done', 'In progress'),
        allowNull: false,
        defaultValue: 'Pending',
    },
    description: {
        type: Sequelize.TEXT,
    }
});


(async () => {
    try {
        await sequelize.authenticate(); // Verifica conexão com o banco de dados
        await tasks.sync({ force: false }).then(() => {
            console.log('Table created successfully');
        });
        // Cria tabelas

    } catch (error) {
        console.error("Coudn't connect or syncronize with database:", error);
        process.exit(1);
    }
})();

module.exports = tasks;