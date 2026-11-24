import express from "express";
import { handleCreateUserSignUp } from "../controllers/user.controller.js";

const router = express.Router()

router.post("/", handleCreateUserSignUp)

export default router