// Express.js
const express = require("express")

const app = express() // Similar to createServer Handler function
const PORT = 8000;

app.get("/", (req, res) => {
    return res.send("Hello from homepage.")
})

app.get("/about", (req, res) => {
    return res.send("Hello from About page.")
})

app.listen(PORT, () => {
    console.log(`Your application is listening to ${PORT}`);
})