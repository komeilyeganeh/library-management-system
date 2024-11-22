import { configDotenv } from "dotenv";
configDotenv();

export const DB_USERNAME = process.env.DATABASE_USERNAME;
export const DB_PASSWORD = process.env.DATABASE_PASS;