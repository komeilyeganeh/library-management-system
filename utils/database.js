import { Sequelize } from "sequelize";
import { DB_USERNAME, DB_PASSWORD } from "../config/db_config.js";
console.log(DB_USERNAME);


export const sequelize = new Sequelize(
  "library-system",
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASS,
  {
    dialect: "mysql",
    host: "localhost",
  }
);
