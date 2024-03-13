//@ts-nocheck
import { Router } from 'express';
import { ReqUser } from '../auth/login';
import { tokenCheck } from '../../middlewares/auth.mw';


const router = Router();

router.get('/', tokenCheck, (req: ReqUser, res) => {
    try {
 
      
        res.json({message: `You may now view the blogs! ${req.user.email}`});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'codes shit', error: error.message});
    }
   
});


export default router;