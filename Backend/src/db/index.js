import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        const data = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected to ${DB_NAME} database!! DB HOST: ${data.connection.host}`);
        return data;
    } catch (error) {
        console.log("ERROR in connecting to database", error);
        process.exit(1);
    }
}

export default connectDB;
