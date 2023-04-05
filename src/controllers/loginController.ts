import { Request, Response } from 'express';
import LoginService from '../services/loginService';

class LoginController {
  service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  async login(req: Request, res: Response) {
    const { status, response } = await this.service.login(req.body);
    res.status(status).json(response);
  }
}

export default new LoginController();