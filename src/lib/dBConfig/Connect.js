import mongoose from "mongoose";

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGOSE);
        console.log('database connection established');
        
    } catch (error) {
        console.log('Error connecting', error);
        console.log(error);
        
    }
}

export default connect;