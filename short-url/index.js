import dotenv from 'dotenv'
import express from 'express'

dotenv.config({
    path: "./.env"
})

const app = express()

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.listen(process.env.PORT || 8001, () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
})