const User = require("../models/userModel")

const createUser = async (data) => {
    const user = new User(data);
    await user.save();
    return user;
}

const getAllUsers = async () => {
    return await User.find();
}

const getUserById = async (id) => {
    return await User.findById(id);
}

const getUserByEmail = async (email) => {
    return await User.findOne({ email: email });
}

const updateUser = async (id, userData) => {
    return await User.findByIdAndUpdate(id, userData, { new: true });
}

const deleteUser = async (id) => {
    await User.findByIdAndDelete(id);
}

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
    deleteUser,
    updateUser,
    getAllUsers
}