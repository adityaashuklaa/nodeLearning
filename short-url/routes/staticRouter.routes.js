import express from "express";
import { Url } from "../models/url.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const allUrls = await Url.find({})
    return res.render('home', {
        urls: allUrls
    })
})

router.get("/signup", (req, res) => {
    return res.render("signup")
})

export default router