import { Router } from 'express';
const router = Router();

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/user.controller'
import { verifyToken, isOwner } from '../middlewares/authJWT'

router.get( "/", getUsers );
router.post( "/", [verifyToken], createUser );
router.get( "/:id", getUser );
router.delete( "/:id", [verifyToken, isOwner], deleteUser );
router.put ( "/:id", [verifyToken, isOwner], updateUser );

export default router;
