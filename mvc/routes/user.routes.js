import express from 'express'
import { handleCreateNewUser, handleDeleteUserById, handleGetAllUsers, handleGetUserById, handleUpdateUserById } from '../controllers/user.controller.js';

const router = express.Router();

// router.get("/users", async (req, res) => {
//     const allDbUsers = await User.find({})
//     const html = `<ul>
//         ${allDbUsers.map((user) => `<li>${user.firstName} = ${user.email}</li>`).join("")}
//     </ul>`
//     res.send(html)
// })

router
    .route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser)

router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)


export default router