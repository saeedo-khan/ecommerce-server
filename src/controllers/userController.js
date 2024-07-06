const User = require("../models/userModel");

const createUser = async (req, res) => {
    try {
        const newUser = await new User({
            name: req.body.name,
            age: req.body.age
        })
        await newUser.save();
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

module.exports = {
    createUser,
    getAllUsers
}