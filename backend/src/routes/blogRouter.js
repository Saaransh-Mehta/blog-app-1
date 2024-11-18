import express from 'express'
import { createPost,deletePost,updatePost,getPost,allPosts } from '../controllers/blog.controller.js';
import { auth} from '../middleware/auth.js';
import { createComment, deleteComment } from '../controllers/comment.controller.js';

const BlogRouter = express.Router();

BlogRouter.post('/create/:id',auth,createPost)
BlogRouter.patch('/update',auth,updatePost)
BlogRouter.delete('/delete/:id',auth,deletePost)
BlogRouter.get('/get/:id',auth,getPost)
BlogRouter.post('/comment/:id',auth,createComment)
BlogRouter.delete('/comment/delete/:id',auth,deleteComment)
BlogRouter.get('/all-post',auth,allPosts)
export {BlogRouter}