import { getUser } from "../service/auth.js"

export async function restrictToLoggedInUserOnly(req, res, next) {
    const userUid = req.headers['authorization']
    if(!userUid) return res.redirect('/login')

    const token = userUid?.split("Bearer ")[1]
    const user = getUser(token)
    if(!user) return res.redirect("/signup")

    req.user = user
    next()
}

export async function CheckAuth(req, res, next) {    
    const userUid = req.headers['authorization']
    const token = userUid?.split("Bearer ")[1]
    const user = getUser(token)
    req.user = user
    next()
}