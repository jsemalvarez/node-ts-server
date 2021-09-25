import { Sequelize } from "sequelize/types";

const db = new Sequelize('node', 'root','',{
    host:'localhost',
    dialect:'mysql',
    // logging: false, // nos permite ver en consola la query 
})

export default db;