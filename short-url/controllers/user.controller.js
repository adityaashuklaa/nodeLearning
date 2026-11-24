import { User } from "../models/user.model.js";
import { v4 as uuidv4 } from 'uuid';

export async function handleUserSignUp(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name, 
        email,
        password,
    })
    return res.redirect("/");
}

export async function handleUserLogin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password })
    if(!user) return res.render("login", {
        error: "Invalid Username or password"
    })
    const sessionId = uuidv4();
    return res.redirect("/");
}