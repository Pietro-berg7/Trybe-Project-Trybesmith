import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

class OrdersController {
  service: OrdersService;

  constructor() {
    this.service = new OrdersService();
  }

  async listOrders(_req: Request, res: Response) {
    const ordersList = await this.service.listOrders();
    res.status(200).json(ordersList);
  }
}

export default new OrdersController();