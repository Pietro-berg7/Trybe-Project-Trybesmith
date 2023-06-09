import jwt from 'jsonwebtoken';
import { IAuthUser } from '../interfaces/IUsers';

const JWT_SECRET = process.env.JWT_SECRET ?? '';

export default class Token {
  private jwt = jwt;

  public generateToken(user: IAuthUser) {
    const { id, username, vocation, level } = user;
    const payload = { id, username, vocation, level };

    return this.jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256' });
  }

  public validateToken(token: string) {
    if (!token) { 
      return { status: 401, response: { message: 'Token not found' } };
    }

    try {
      const validate = this.jwt.verify(token, JWT_SECRET);
      
      return { validate };
    } catch (error) {
      return { status: 401, response: { message: 'Invalid token' } };
    }
  }
}
