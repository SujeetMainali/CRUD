import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth.service";
// import SujeetService from "../services/sujeet.service";
import authService from "../services/auth.service";
import JWTService from "../services/utils/jwt.service";
import env from "../config/env"

class AuthController {
    constructor() {
        // this.signup = this.signup.bind(this);
     }

     
     //get all user from the database
    async getAll(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.split(' ')[1];
        JWTService.verify(token as string, env.JWT_SECRET_KEY as string)
      
        const user = await authService.getAllUsers();
        res.status(200).json({
            status: "success",
            data: 
                user,
            
        });
    }
     // signup controller to create a new user which is used as middleware in the route
    async signup(req: Request, res: Response, next: NextFunction) {
        const data = req.body;
        try {
            const user = await authService.signUp(data);
            res.status(200).json({
                status: "success",
                data: {
                    user
                },
                message: "User Created successfully"
            })
        } catch (error) {
            console.log(error);
        }
    }

    async signin(req:Request,res:Response,next:NextFunction){
        const data = req.body;
        try {
            const user = await authService.signIn(data);
            const token = JWTService.sign({payload: user.id}, env.JWT_SECRET_KEY!, {expiresIn: env.EXPIRATION_TIME})
            res.status(200).json({
                status:"success",
                token : token,
                data:user,
                message:"signin success"
            })
        } catch (error) {
            console.log(error);
        }
    }

    async removeUser(req:Request,res:Response, next:NextFunction){
        const data = req.body;
        try{
            const user = await authService.removeUser(data);
            res.status(200).json({
                status:"success",
                message : `${user.email} deleted successfully`
            })
        }
        catch(error){
            console.log(error);
            
        }
    }

    async changePassword(req:Request,res:Response,next:NextFunction){
        const data = req.body;
        try {
            const user = await authService.updatePassword(data);
            res.status(200).json({
                status:"success",
                data: user,
                message:"password changed successfully"
            })
        } catch (error) {
            console.log(error);
            
        }
    }
}

export default new AuthController();