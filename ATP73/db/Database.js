import { Sequelize } from "sequelize";

const Database = new Sequelize(
    'postgres', //database
    'postgres', //user
    '123',
    {
        host: 'localhost',
        port: 5432,
        dialect: 'postgres'
    }
);
export default Database;