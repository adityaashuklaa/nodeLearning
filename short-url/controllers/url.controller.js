import shortid from "shortid"
import { Url } from "../models/url.model.js"

export async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({ error: "Url is required." })
    const shortID = shortid()
    await Url.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
    })

    return res.json({ id: shortID })
}