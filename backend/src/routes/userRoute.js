import express from 'express'
import { registerUser } from '../controllers/user.controller';

const UserRouter = express.Router();

UserRouter.route('/register',registerUser)


export default UserRouter

