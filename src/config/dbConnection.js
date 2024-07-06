const mongoose = require("mongoose");

const mongoUri = "mongodb+srv://saeedkhanii:admin123@cluster0.dgvopok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connect = () => {
    mongoose.connect(mongoUri)

    mongoose.connection.on("connected", () => {
        console.log("Database connected successfully");
    })
}

module.exports = connect;