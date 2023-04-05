import OrdersModel from '../models/ordersModel';

export default class OrdersService {
  model: OrdersModel;

  constructor() {
    this.model = new OrdersModel();
  }

  async listOrders() {
    const ordersList = await this.model.listOrders();
    return ordersList;
  }

  async createOrders(productsIds: number[], userId: number) {
    const orderId = await this.model.createOrders(userId);
    const insertSaleId = productsIds.map(async (productId) => {
      await this.model.createOrderById(orderId, productId);
    });

    await Promise.all(insertSaleId);

    return { userId, productsIds };
  }
}