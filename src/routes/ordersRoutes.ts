import express from 'express';
import OrdersController from '../controllers/ordersController';

const router = express.Router();

router.get('/', (req, res) => OrdersController.listOrders(req, res));

export default router;