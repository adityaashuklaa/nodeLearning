import dotenv from 'dotenv'
import express from 'express'
import connectDB from './db/index.js'
import path from "path"
import urlRoute from "./routes/url.routes.js" 
import staticRouter from './routes/staticRouter.routes.js'
import userRoute from "./routes/user.routes.js"

dotenv.config({
    path: "./.env"
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("ERROR", error);
        throw error
    })
    app.listen(process.env.PORT || 8001, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB Connection failed!!", err);  
})

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use("/url", urlRoute)
app.use("/", staticRouter)
app.use("/user", userRoute)