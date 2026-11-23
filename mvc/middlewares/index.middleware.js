import fs from "fs"

export default function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(filename, `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`),
        (err, data) => {
            next();
        }
    }
}