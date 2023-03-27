import dotenv from "dotenv";
dotenv.config();
class Env {
    static NODE_ENV = process.env.NODE_ENVIROMNET;
    static PORT = +process.env.PORT;
    // DATABASE CONFIGURATION 
    static DATABASE_HOST = process.env.DATABASE_HOST;
    static DATABASE_PORT = +process.env.DATABASE_PORT;
    static DATABASE_USER = process.env.DATABASE_USER;
    static DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
    static DATABASE_NAME = process.env.DATABASE_NAME;
}
export default Env;
