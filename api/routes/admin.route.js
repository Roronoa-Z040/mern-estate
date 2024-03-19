import express from 'express';
import { test1, deleteListing } from '../controllers/admin.controller.js';
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get('/test1', test1 ) ;

router.delete('/delete/:id', deleteListing);


export default router;