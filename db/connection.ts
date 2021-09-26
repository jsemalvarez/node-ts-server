import { Sequelize } from "sequelize";

const db = new Sequelize( 
    process.env.SQL_DATABASE || '',
    process.env.SQL_USER || '',
    process.env.SQL_USE || '',
    {
        host: process.env.HOST || '',
        dialect: 'mysql',
        // logging: false, // nos permite ver en consola la query
    }
)

export default db;