import * as express from 'express';
import pizzaRouter from './pizza';
import blogsRouter from './blogs';
const router = express.Router();

router.use('/pizza', pizzaRouter);
router.use('/blogs', blogsRouter);



export default router;