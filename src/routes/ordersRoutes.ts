import express from 'express';
import OrdersController from '../controllers/ordersController';
import auth from '../middlewares/auth';
import orderValidation from '../validations/ordersValidation';

const router = express.Router();

router.get('/', (req, res) => OrdersController.listOrders(req, res));
router.post(
  '/', 
  auth, 
  orderValidation,
  (req, res) => OrdersController.createOrders(req, res),
);

export default router;