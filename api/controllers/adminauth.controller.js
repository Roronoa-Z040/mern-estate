import Admin from "../models/admin.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';


export const adminsignup = async (req,res, next) => {

    const { username, email, password } = req.body;
    const hashedPassword  = bcryptjs.hashSync(password, 10);
    const newAdmin = new Admin({ username, email , password: hashedPassword });
    try {
        await newAdmin.save();
        res.status(201).json('Admin created successfully!');
    }catch(error){
        next(error);
       /*  next(errorHandler(550, 'error from the function ')); */
    }
    
};


export const adminsignin = async(req, res, next) => {    
    const{ email, password } = req.body;
    try {
        const validAdmin = await Admin.findOne({ email });
        if (!validAdmin) return next(errorHandler(404, 'Admin not found !'));
        const validPassword = bcryptjs.compareSync(password, validAdmin.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials !'));
        const token = jwt.sign({ id : validAdmin._id }, process.env.JWT_SECRET)
        const { password: pass, ...rest } =validAdmin._doc;
        res
        .cookie('access_token', token, { httpOnly: true })
        .status(200)
        .json(rest);
    }
    catch(error) 
    {
        next(error);
    }

};