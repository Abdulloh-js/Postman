import dotenv from "dotenv"

dotenv.config();

export const PORT= process.env.PORT || 7070;
export const REG_KEY = process.env.REG_KEY;
export const ENVIRONMENT = process.env.ENVIRONMENT;