import { ResultSetHeader } from 'mysql2';
import connection from './connection';

export default class OrdersModel {
  private connection = connection;

  async listOrders() {
    const query = `
      SELECT 
        o.id AS id,
        o.user_id AS userId,
      JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders o
      JOIN Trybesmith.products p ON o.id = p.order_id
      GROUP BY o.id;
    `;
    const [orders] = await this.connection.execute(query);

    return orders;
  }

  async createOrders(userId: number) {
    const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(query, [userId]);
      
    return insertId;
  }

  async createOrderById(orderId: number, productId: number) {
    const query = 'UPDATE Trybesmith.products SET order_id=? WHERE id=?';
    const [result] = await this.connection
      .execute<ResultSetHeader>(query, [orderId, productId]);
    const { affectedRows } = result;
    
    if (affectedRows > 0) { 
      return affectedRows;
    }

    return false;
  }
}