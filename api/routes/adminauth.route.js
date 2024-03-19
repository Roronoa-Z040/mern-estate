import  express  from "express";
import{ adminsignin , adminsignup } from "../controllers/adminauth.controller.js";

const router = express.Router();

router.post("/adminsignup",adminsignup);

router.post("/adminsignin",adminsignin);

export default router;