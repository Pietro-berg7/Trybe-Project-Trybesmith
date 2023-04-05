import { Request, Response } from 'express';
import UsersService from '../services/usersService';

class UsersController {
  service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  async createUser(req: Request, res: Response) {
    const newUser = await this.service.createUser(req.body);
    
    res.status(201).send(newUser);
  }
}

export default new UsersController();