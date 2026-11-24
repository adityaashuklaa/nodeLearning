import express from "express";
import { Url } from "../models/url.model.js";

const staticRouter = express.Router();

staticRouter.get("/", async (req, res) => {
    const allUrls = await Url.find({})
    return res.render('home', {
        urls: allUrls
    })
})

export default staticRouter