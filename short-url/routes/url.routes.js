import express from 'express'
import { handleGenerateShortUrl, handleGetAnalytics, handleUrlRedirect } from '../controllers/url.controller.js';

const router = express.Router();

router.post("/", handleGenerateShortUrl)
router.get("/:shortId", handleUrlRedirect)
router.get("/analytics/:shortId", handleGetAnalytics)

export default router