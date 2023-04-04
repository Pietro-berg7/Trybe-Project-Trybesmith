import { ResultSetHeader } from 'mysql2';
import { ICreateProduct } from '../interfaces/IProducts';
import connection from './connection';

export default class ProductsModel {
  private connection = connection;

  async createProduct(postObj: ICreateProduct) {
    const { name, amount } = postObj;
    const query = `
      INSERT INTO Trybesmith.products(name,amount)
      VALUES(?,?);
    `;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    return insertId;
  }

  async listProducts() {
    const query = 'SELECT * FROM Trybesmith.products';
    const [products] = await this.connection.execute(query);
    return products;
  }
}