const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },                     
        age: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model("User", userSchema)