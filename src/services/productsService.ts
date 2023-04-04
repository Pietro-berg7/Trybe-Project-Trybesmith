import { ICreateProduct } from '../interfaces/IProducts';
import ProductsModel from '../models/productsModel';

export default class ProductsService {
  model: ProductsModel;

  constructor() {
    this.model = new ProductsModel();
  }

  async createProduct(postObj: ICreateProduct) {
    const { name, amount } = postObj;
    const id = await this.model.createProduct(postObj);
    return { id, name, amount };
  }

  async getAllProducts() {
    const productsList = await this.model.getAllProducts();
    return productsList;
  }
}