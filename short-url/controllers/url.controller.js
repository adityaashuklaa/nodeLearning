import nanoid from "nanoid"
import { Url } from "../models/url.model"

export async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({ error: "Url is required." })
    const shortID = nanoid(8) 
    await Url.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
    })

    return res.json({ id: shortID })
}