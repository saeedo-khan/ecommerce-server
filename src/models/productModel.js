const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,            
        },
        price: {
            type: Number,
            require: true,
        },
        description: {
            type: String,
        },
        image: {
            type: String,
            require: true,
        }
    },
    {
        timestamps: true
    }
)


module.exports = mongoose.model("Product", productSchema)