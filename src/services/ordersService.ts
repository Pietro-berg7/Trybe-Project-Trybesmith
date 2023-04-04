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
}