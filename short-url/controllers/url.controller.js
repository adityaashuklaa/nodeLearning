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

export async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await Url.findOne({ shortId })
    return res.json({ totalClicks: result.visitHistory.length, analystics: result.visitHistory })
}

export async function handleUrlRedirect(req, res) {
    const shortId = req.params.shortId;
    const entry = await Url.findOneAndUpdate({
        shortId
    }, { $push: {
        visitHistory: {
            timestamp: Date.now()
        }
    } })
    res.redirect(entry.redirectUrl)
}