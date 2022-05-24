import { Model, DataTypes } from "sequelize";
import {database} from "../config/database";

export class User extends Model {
  public id!: string;
  public name!: string;
  public password!: String;
  public createdAt!: Date;
  public updatedAt!: Date;
  public deletedAt!: Date;
}

User.init(
    {
      id: {
        type: new DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      password: {
        type: new DataTypes.STRING,
        allowNull: false,
      },
      deletedAt: {
          type: new DataTypes.DATE,
          allowNull: true
      }
    },
    {
      tableName: "user",
      sequelize: database,
    }
  );
  
  User.sync({force: false}).then(() => console.log("User table created"));