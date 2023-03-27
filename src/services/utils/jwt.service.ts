import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";

class JWTService {
    static sign(
        payload: JwtPayload,
        secretKey: Secret,
        options: SignOptions,
    ) {
        return jwt.sign(payload, secretKey, options)
    }

    static async verify(token: string, secret: string): Promise<any> {
        try {
            const decoded = await jwt.verify(token, secret);
            return decoded;
        } catch (error) {
            throw new Error('invalid token')
        }
    }
}
export default JWTService;