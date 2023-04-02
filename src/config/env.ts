import dotenv from "dotenv";
dotenv.config();

class Env {
    static NODE_ENV = process.env.NODE_ENVIROMNET;
    static PORT = +process.env.PORT!;

    // DATABASE CONFIGURATION 
    static DATABASE_HOST = process.env.DATABASE_HOST;
    static DATABASE_PORT = +process.env.DATABASE_PORT!;
    static DATABASE_USER = process.env.DATABASE_USER ;
    static DATABASE_PASSWORD = process.env.DATABASE_PASSWORD; 
    static DATABASE_NAME = process.env.DATABASE_NAME;
    static JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
    static EXPIRATION_TIME = +process.env.EXPIRATION_TIME!;
    static ADMIN_EMAIL = process.env.ADMIN_EMAIL;
}

export default Env;

// this class is used to set up all the environment variables in the application 