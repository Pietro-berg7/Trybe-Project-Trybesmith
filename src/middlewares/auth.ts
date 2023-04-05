import { Request, Response, NextFunction } from 'express';
import Token from '../utils/jwt';

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization || '';
  const classToken = new Token();
  const user = classToken.validateToken(token);

  if ('status' in user) {
    const { status, response } = user;
    return res.status(status as number).json(response);
  }
  
  req.body.user = user;

  next();
};

export default auth;