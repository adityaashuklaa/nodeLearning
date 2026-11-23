import express from 'express'
import { handleGenerateShortUrl } from '../controllers/url.controller';

const router = express.Router();

router.post("/", handleGenerateShortUrl)