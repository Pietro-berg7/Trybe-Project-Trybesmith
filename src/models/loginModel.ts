import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { ILogin } from '../interfaces/ILogin';

export default class LoginModel {
  private connection = connection;

  async login(postObj: ILogin) {
    const { username, password } = postObj;
    const query = `
      SELECT *
      FROM Trybesmith.users
      WHERE username = ?
      AND password = ?
    `;
    const [result] = await this.connection
      .execute(query, [username, password]);

    return (result as RowDataPacket[])[0];
  }
}