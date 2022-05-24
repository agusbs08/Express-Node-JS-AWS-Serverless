"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const sequelize_1 = require("sequelize");
exports.database = new sequelize_1.Sequelize({
    host: "pintapdb.crqrjxcidqof.us-east-1.rds.amazonaws.com",
    port: 3306,
    database: "pintapdb",
    username: 'pintap',
    password: 'pintap123',
    dialect: "mariadb",
    storage: ":memory:",
});
//# sourceMappingURL=database.js.map