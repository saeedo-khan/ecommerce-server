const Product = require("../models/productModel");
var multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const upload = multer({ storage: storage})


const createNewProduct = async (req, res) => {
    try {
        const newProduct = await new Product({
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            image: req.file.path
        })        
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}


module.exports = {
    createNewProduct: createNewProduct,
    getAllProducts: getAllProducts
}