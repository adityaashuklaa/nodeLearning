const express = require("express");
const users = require("./MOCK_DATA.json")

const app = express();
app.use(express.json())
const PORT = 8000;

app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map(users => `<li>${users.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html)
})

// Routes
app.get("/api/users", (req, res) => {
    return res.json(users)
})

// Grouping

app.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id)
    return res.json(user)
})
.patch("/api/users/:id", (req, res) => {
    res.json({ status: "pending" })
})
.delete("/api/users/:id", (req, res) => {
    res.json({ status: "pending" })
})

app.post("/api/users", (req, res) => {
    res.json({ status: "pending" })
})


app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))