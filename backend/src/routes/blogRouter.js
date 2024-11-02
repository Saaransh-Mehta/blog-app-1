import express from 'express'
import { createPost,updatePost } from '../controllers/blog.controller.js';
import { auth } from '../middleware/auth.js';

const BlogRouter = express.Router();

BlogRouter.post('/create',auth,createPost)
BlogRouter.patch('/update',auth,updatePost)

export {BlogRouter}