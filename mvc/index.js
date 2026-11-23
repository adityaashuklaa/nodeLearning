import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/index.js'
import userRouter from "./routes/user.routes.js"
import logReqRes from './middlewares/index.middleware.js'


dotenv.config({
    path: "./.env"
})

const app = express()

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(logReqRes("log.txt"))

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERROR", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB Connection failed!!", err);  
})

app.use("/user", userRouter)