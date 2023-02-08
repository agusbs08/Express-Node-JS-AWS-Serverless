import {Sequelize} from "sequelize";

export const database = new Sequelize({
  host: process.env.DB_HOST ?? '',
  port: process.env.DB_PORT ? parseFloat(process.env.DB_PORT) : 3306,
  database: process.env.DB_NAME ?? '',
  username: process.env.DB_USERNAME ?? '',
  password: process.env.DB_PASSWORD ?? '',
  dialect: "mariadb",
  storage: ":memory:",
});