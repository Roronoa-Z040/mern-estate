import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,   
        },
        email: {
            type: String,
            required: true,
            unique: true,   
        },
        password: {
            type: String,
            required: true,   
        },
        avatar: {
            type: String,
            default: "https://www.shutterstock.com/image-vector/user-icon-vector-600nw-393536320.jpg"
           
        },
    },
    {timestamps: true}
);

const Admin =  mongoose.model('Admin',adminSchema);

export default Admin;