import express from 'express';
import { ordersRoutes, productsRoutes, usersRoutes } from './routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);

export default app;
