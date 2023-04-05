import express from 'express';
import { loginRoutes, ordersRoutes, productsRoutes, usersRoutes } from './routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);
app.use('/login', loginRoutes);

export default app;
