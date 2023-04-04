import express from 'express';
import UsersController from '../controllers/usersController';

const router = express.Router();

router.post('/', (req, res) => UsersController.createUser(req, res));

export default router;