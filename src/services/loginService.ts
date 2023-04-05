import LoginModel from '../models/loginModel';
import { ILogin } from '../interfaces/ILogin';
import Token from '../utils/jwt';

export default class LoginService {
  model: LoginModel;

  jwt: Token;

  constructor() {
    this.model = new LoginModel();
    this.jwt = new Token();
  }

  async login(postObj: ILogin) {
    const { username, password } = postObj;

    if (!username || !password) {
      return { 
        status: 400, 
        response: { message: `${!username ? '"username" is required' : '"password" is required'}` },
      };
    }

    const loginResult = await this.model.login(postObj);

    if (!loginResult) {
      return { status: 401, response: { message: 'Username or password invalid' } };
    }

    const { id, vocation, level } = loginResult;
    const token = this.jwt.generateToken({ id, username, vocation, level });

    return { status: 200, response: { token } };
  }
}
