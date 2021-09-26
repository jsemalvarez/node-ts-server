"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize(process.env.SQL_DATABASE || '', process.env.SQL_USER || '', process.env.SQL_USE || '', {
    host: process.env.HOST || '',
    dialect: 'mysql',
    // logging: false, // nos permite ver en consola la query
});
exports.default = db;
//# sourceMappingURL=connection.js.map