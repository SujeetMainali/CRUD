import messages from "../../constants/messages";
import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";
import HttpException from "../../utils/HttpException";

class JWTService {
    static sign(
        payload: JwtPayload,
        secretKey: Secret,
        options: SignOptions,
    ) {
        return jwt.sign(payload, secretKey, options)
    }

    static  verify(token: string, secret: string) {
        
            return jwt.verify(token, secret);
         
    
    }
}
export default JWTService;