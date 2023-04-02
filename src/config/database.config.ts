import "reflect-metadata"
import { DataSource } from "typeorm"
import env from "./env";
import {User} from "../entities/user.entity";
import { Sujeet } from "../entities/sujeet.entity";
import { UserRoles } from "../entities/userRoles.entity";


// database configuration using typrorm
const AppDataSource = new DataSource({
    type: "mysql",
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    username: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [User,Sujeet, UserRoles],
    subscribers: [],
    migrations: [],

});


export default AppDataSource;
