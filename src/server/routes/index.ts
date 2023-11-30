import { Router } from 'express';
import apiRouter from './api';
import authRouter from './auth';
import registerRouter from './auth/register';

const router = Router();

router.use('/api', apiRouter);
router.use('/auth', authRouter);
router.use('/auth/register', registerRouter);

export default router;