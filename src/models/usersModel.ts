import { ResultSetHeader } from 'mysql2';
import { ICreateUser } from '../interfaces/IUsers';
import connection from './connection';

export default class UsersModel {
  private connection = connection;

  async createUser(postObj: ICreateUser) {
    const { username, vocation, level, password } = postObj;
    const query = `
      INSERT INTO Trybesmith.users(username,vocation,level,password)
      VALUES(?,?,?,?);
    `;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(query, [username, vocation, level, password]);
      
    return insertId;
  }
}