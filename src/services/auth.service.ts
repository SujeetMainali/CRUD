
import AppDataSource from "../config/database.config";
import { User } from "../entities/user.entity";
import messages from "../constants/messages";
import { ChangepasswordDTO, RemoveDTO, SignInDTO } from "../dtos/auth.dto";
import { SignUpDTO } from "../dtos/auth.dto";
import HttpException from "../utils/HttpException";
import BcryptService from "./utils/bcrypt.service";


// import router from "../routes/index"


class AuthService {
    constructor(private userRepository = AppDataSource.getRepository(User)) { }

    /**this service facilitates to create a user in the database taking userData of type SignUpDTO */
    async signUp(userData: SignUpDTO): Promise<User> {
        const { firstName, middleName, lastName, email, password } = userData;
        const isExist = await this.userRepository.findOne({
            where: {
                email
            },
        }); //to check if the user with email already exists
        if (isExist) {
            throw HttpException.badRequest(messages["emailAlreadyExists"])
        }
        const hashedPassword = await BcryptService.hash(password); //creating a hashed password using bcrypt
        const user = this.userRepository.create({
            firstName,
            middleName,
            lastName,
            email,
            password: hashedPassword
        }); //creating a user with firstname, middlename, lastname, email and password of hashed password
        return await this.userRepository.save(user); //saving the created user in the database.
    }

    /** method to get all the users from the database */
    async getAllUsers() {
        return await this.userRepository.find()

    }


    //**method to sign in a user with the provided email and passsword  */
    async signIn(userData: SignInDTO): Promise<User> {
        const { email, password } = userData;
        const user = await this.userRepository.findOne({
            where: {
                email
            },
        }); // finding the user with provided email from the database
        if (!user) {
            throw HttpException.badRequest(messages["invalidAuth"]);
        }

        //comparing the provided password with hashed password stored in the database
        const isValidPassword = await BcryptService.compare(
            password,
            user.password
        );
        if (!isValidPassword) {
            throw HttpException.badRequest(messages["invalidAuth"])
        }


        return user;
    }

    /**method to remove the specific provided user form the database */  
    async removeUser(userData: RemoveDTO): Promise<User> {
        const { email, password } = userData;
        const user = await this.userRepository.findOne({
            where: {
                email
            },
        })
        if (!user) {
            throw HttpException.badRequest(messages["invalidAuth"]);
        }
        const isValidPassword = await BcryptService.compare(
            password, user.password
        );
        if (!isValidPassword) {
            throw HttpException.badRequest(messages["invalidAuth"])
        }
        return await this.userRepository.remove(user);
    }


    /**method to update the password taking email, password and new password from the user */
    async updatePassword(userData: ChangepasswordDTO): Promise<User> {
        const { email, password, newPassword } = userData;
        // checking if the provided email is available in the database or not 
        const doesExist = await this.userRepository.findOne({
            where: { email },
        });
        if (!doesExist) {
            throw HttpException.badRequest(messages["invalidEmail"])
        }

        // checking if the provided password is correct or not
        const isValidPassword = await BcryptService.compare(
            password, doesExist.password
        )
        if (!isValidPassword) {
            throw HttpException.badRequest(messages["invalidAuth"]);
        }

        // hashing the new provided password
        const newHashedPassword = await BcryptService.hash(newPassword);

        // updating the available password of database with newly updated password 
        if (isValidPassword) {
            doesExist.password = newHashedPassword;
        }

        // saving the user with new password
        const user = this.userRepository.save(doesExist);
        return user;


    }

}

export default new AuthService;
