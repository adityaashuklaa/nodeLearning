import { User } from "../models/user.model.js";

export async function handleCreateUserSignUp(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name, 
        email,
        password,
    })
    return res.render("home");
}