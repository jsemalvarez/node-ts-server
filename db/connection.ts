import { Sequelize } from "sequelize";


const db = new Sequelize( 
    process.env.SQL_DATABASE || '',
    process.env.SQL_USER || '',
    process.env.SQL_PASSWORD || '',
    {
        dialect: 'mysql',
        host: process.env.SQL_HOST || '',
        port: 3306,
        // logging: false, // nos permite ver en consola la query
    }
)

export default db;