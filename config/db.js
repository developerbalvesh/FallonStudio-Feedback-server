const mongoose = require("mongoose");

exports.connectDB = async()=>{
    try {
        if(process.env.MONGO_URI){
            const conn = await mongoose.connect(process.env.MONGO_URI)
            console.log(`Connected to ${conn.connection.host} `);
        }else{
            throw new Error("No MONGO_URI found!")
        }
    } catch (error) {
        console.log("Error while connecting to DB: "+error)
    }
}