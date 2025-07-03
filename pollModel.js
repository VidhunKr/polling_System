import mongoose from "mongoose";

const pollSChema = new mongoose.Schema({
    question:{type:String, required:true},
    options:{type:[String], required:true},
    votes:{type:[Number], default:[]},
})

export const pollModel = mongoose.model('poll',pollSChema)


