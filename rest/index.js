    const express = require("express");
    const users = require("./MOCK_DATA.json")
    const fs = require("fs")

    const app = express();
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
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

    app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id)
        if(!user) return res.status(404).json({ status: "error", message: "User not found" })
        return res.json(user)
    })
    .patch((req, res) => {
        const id = Number(req.params.id)
        const index = users.findIndex(user => user.id === id)
        if (index === -1) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
        users[index] = { ...users[index], ...req.body, id };
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).json({ status: "error", message: "Failed to save" });
            }
            return res.json({ status: "success", user: users[index] });
        });
    })
    .delete((req, res) => {
        const id = Number(req.params.id)
        const index = users.findIndex((user) => user.id === id);
        if (index === -1) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }
        users.splice(index, 1);
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).json({ status: "error", message: "Failed to save" });
            }
            return res.json({ status: "success", id });
        });
    })

    app.post("/api/users", (req, res) => {
        const body = req.body
        const newId = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
        const newUser = { ...body, id: newId };
        users.push(newUser);
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
            if (err) return res.status(500).json({ status: "error", message: "Failed to save" });
            return res.status(201).json({ status: "success", id: newId });
        });
    })


    app.listen(PORT, () => console.log(`Server Started at PORT: ${PORT}`))