import {User}  from "../entities/user.entity";
import AppDataSource from "../config/database.config"

export async function saveUser() {
    const user = new User()
    user.firstName = "mainali"
    user.lastName = "sujeet"
    user.email = "mainali@gmail.com"
    user.password = "mainali123"

    const userRepository = AppDataSource.getRepository(User)
    await userRepository.save(user)
    console.log(`user has been saved`);
    
}

