import express from 'express';
import ProductsController from '../controllers/productsController';
import productValidation from '../validations/productsValidation';

const router = express.Router();

router.post(
  '/', 
  productValidation,
  (req, res) => ProductsController.createProduct(req, res),
);
router.get('/', (req, res) => ProductsController.listProducts(req, res));

export default router;