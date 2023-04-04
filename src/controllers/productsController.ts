import { Request, Response } from 'express';
import ProductsService from '../services/productsService';

class ProductsController {
  service: ProductsService;

  constructor() {
    this.service = new ProductsService();
  }

  async createProduct(req: Request, res: Response) {
    const newProduct = await this.service.createProduct(req.body);
    res.status(201).json(newProduct);
  }

  async getAllProducts(_req: Request, res: Response) {
    const productsList = await this.service.getAllProducts();
    res.status(200).json(productsList);
  }
}

export default new ProductsController();