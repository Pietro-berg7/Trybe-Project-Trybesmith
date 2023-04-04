import express from 'express';
import ProductsController from '../controllers/productsController';

const router = express.Router();

router.post('/', (req, res) => ProductsController.createProduct(req, res));
router.get('/', (req, res) => ProductsController.listProducts(req, res));

export default router;