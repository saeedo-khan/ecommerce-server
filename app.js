const express = require('express')
const app = express()

const server = require("http").Server(app)

const cors = require("cors")
const config = require("dotenv").config()
const bodyParser = require("body-parser")
const mongodb = require("./src/config/dbConnection")
const userRoutes = require("./src/routes/v1/userRoutes")
const productRoutes = require("./src/routes/v1/productRoutes")



app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.json());
app.use(cors());
// app.use(
//     bodyParser.urlencoded({
//         extended: true
//     })
// )

mongodb()
app.use(userRoutes)
app.use(productRoutes)


app.get("/hello", (req, res) => {
    res.send("hello to server")
})

server.listen("3001", () => {
    console.log("Server listening on http://localhost:3001")
})