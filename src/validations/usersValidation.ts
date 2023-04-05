import { NextFunction, Request, Response } from 'express';
import { userSchema } from './schemas';

const userValidation = async (req: Request, res: Response, next: NextFunction) => {
  const input = req.body;
  const { error } = userSchema.validate(input);

  if (!error) return next();

  if (error.message.includes('required')) {
    return res.status(400).json({ message: error.message });
  } 
  
  if (error.message.includes('must')) {
    return res.status(422).json({ message: error.message });
  }
  
  next();
};

export default userValidation;