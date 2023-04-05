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

  async createOrders(req: Request, res: Response) {
    const { productsIds, user: { validate: { id } } } = req.body;
    const newOrder = await this.service.createOrders(productsIds, id);

    res.status(201).json(newOrder);
  }
}

export default new OrdersController();