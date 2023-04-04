import { ICreateUser } from '../interfaces/IUsers';
import UsersModel from '../models/usersModel';
import Token from '../utils/jwt';

export default class UsersService {
  model: UsersModel;

  jwt: Token;

  constructor() {
    this.model = new UsersModel();
    this.jwt = new Token();
  }

  async createUser(postObj: ICreateUser) {
    const id = await this.model.createUser(postObj);
    const token = this.jwt.generateToken({ ...postObj, id });
    
    return { token };
  }
}