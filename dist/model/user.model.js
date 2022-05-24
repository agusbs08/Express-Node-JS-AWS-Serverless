"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: new sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    password: {
        type: new sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    deletedAt: {
        type: new sequelize_1.DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: "user",
    sequelize: database_1.database,
});
User.sync({ force: false }).then(() => console.log("User table created"));
//# sourceMappingURL=user.model.js.map