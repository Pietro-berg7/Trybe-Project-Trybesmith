import express from 'express';
import UsersController from '../controllers/usersController';
import userValidation from '../validations/usersValidation';

const router = express.Router();

router.post(
  '/', 
  userValidation,
  (req, res) => UsersController.createUser(req, res),
);

export default router;