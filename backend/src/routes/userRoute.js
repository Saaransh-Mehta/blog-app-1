import express from 'express'
import { getUser, loginUser, registerUser,logoutUser } from '../controllers/user.controller.js';
import { auth } from '../middleware/auth.js';

const UserRouter = express.Router();

UserRouter.post('/register',registerUser)
UserRouter.post('/login',loginUser,auth)
UserRouter.get('/get-user',auth,getUser)
UserRouter.post('/logout',logoutUser)


export default UserRouter

