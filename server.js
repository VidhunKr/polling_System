import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import mainRouter from "./mainRouter.js"

dotenv.config()
const app =express()
app.use(cors())
app.use(express.json())
app.use("/",mainRouter)

mongoose.connect(process.env.URL)
.then(()=>{
    console.log("DB Connected");
    app.listen(process.env.PORT ,()=>{
        console.log(`http://localhost:${process.env.PORT}`);
        
    })
    
}).catch((err)=>{
    console.error("DB Error", err)
})