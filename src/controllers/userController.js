const User = require("../models/userModel");
const userService = require("../services/userServices")

const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id)
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

const getUserByEmail = async (req, res) => {
    try {
        const user = await userService.getUserByEmail(req.body.email)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    getUserByEmail
}