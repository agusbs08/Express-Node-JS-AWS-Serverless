import {Sequelize} from "sequelize";

export const database = new Sequelize({
  host: "pintapdb.crqrjxcidqof.us-east-1.rds.amazonaws.com",
  port: 3306,
  database: "pintapdb",
  username: 'pintap',
  password: 'pintap123',
  dialect: "mariadb",
  storage: ":memory:",
});