import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const dbConnect = async () =>{
    try {
        await mongoose.connect(
            process.env.mongoDbURL
        )
        console.log('db connected')
    } catch (error) {
        console.log('err', error)
    }
}

export default dbConnect;