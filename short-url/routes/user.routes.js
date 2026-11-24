import express from "express";
import { handleUserLogin, handleUserSignUp } from "../controllers/user.controller.js";

const router = express.Router()

router.post("/", handleUserSignUp)
router.post("/login", handleUserLogin)

export default router