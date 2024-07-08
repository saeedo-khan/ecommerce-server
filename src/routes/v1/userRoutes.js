const express = require('express');
const userController = require("../../controllers/userController")

const router = express.Router();

router.post("/users", userController.createUser)
router.get("/users", userController.getAllUsers)
router.get("/users/:id", userController.getUserById)
router.get("/users", userController.getUserByEmail)


module.exports = router;