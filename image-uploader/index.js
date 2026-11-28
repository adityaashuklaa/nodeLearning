import dotenv from "dotenv"
import express, { urlencoded } from "express"
import path from "path"

dotenv.config({
    path: "./.env"
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
