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
    console.log(orders);
    return orders;
  }
}