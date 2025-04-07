const mongoose = require("mongoose")

const feedbackSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    feedbackMessage:{
        type:String,
        required:true
    }
},{timestamps:true})

exports.feedbackModel = mongoose.model("Feedback", feedbackSchema);