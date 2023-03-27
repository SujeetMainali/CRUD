import User from "../entities/user.entity";
import AppDataSource from "../config/database.config";
const user = new User();
user.firstName = "sujeet";
user.lastName = "mainali";
user.email = "mainalisujeet@gmail.com";
user.password = "sujeet@123";
const userRepository = AppDataSource.getRepository(User);
await userRepository.save(user);
