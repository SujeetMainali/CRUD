import "reflect-metadata";
import { DataSource } from "typeorm";
import env from "./env";
import user from "../entities/user.entity";
const AppDataSource = new DataSource({
    type: "mysql",
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [user],
    subscribers: [],
    migrations: [],
});
export default AppDataSource;
