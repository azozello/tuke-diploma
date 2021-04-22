import config from 'config'
import jwt from 'jsonwebtoken'
import {Credentials} from "../../lib/auth/verify-credentials";

const generateToken = (credentials: Credentials): string => {
    return jwt.sign(credentials, config.get('jwtSecret'))
}

const isTokenValid = (token: string): boolean => {
    try {
        jwt.verify(token, config.get('jwtSecret'))
    } catch (e) {
        return false
    }
    return true
}

export {generateToken, isTokenValid}