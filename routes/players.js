const express = require("express")
const { getUsers, createUser, getUserById, updateUser, deleteUser } = require("../controllers/players")
const { validatorCreateItem,validatorGetItemId } = require("../validators/players")

const router = express.Router()

router.get("/", getUsers)
router.get("/:id",validatorGetItemId ,getUserById)
router.post("/create",validatorCreateItem,createUser)
router.put("/update/:id",updateUser)
router.delete("/delete/:id",deleteUser)


module.exports = router