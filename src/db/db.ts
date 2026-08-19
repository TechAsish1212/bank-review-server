import mongoose from "mongoose"

const DB_NAME='review-bank'

const connectDB=async():Promise<void>=>{
    try {
        const connIns=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nDatabase connected successfully!! DB HOST: ${connIns.connection.host}`)
    } catch (error:any) {
         console.log("Error connecting to DB",error.message);
        process.exit(1);
    }
}


export default connectDB;