import express from 'express';
import { registerController,loginController,testController } from  '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
//router object

const router = express.Router();

//routing
//Register || Method POST
router.post('/register', registerController);

//Login || Method POST
router.post('/login', loginController);

//test route
router.get('/test',requireSignIn ,isAdmin, testController)

export default router