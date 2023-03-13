import mongoose from 'mongoose'


const productList = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type:Number,
        required: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
    subCategory:{
        type: String,
        required: true,
    },
    detail:{
        type: String,
        required: true,
    },
});

const Product = mongoose.models.Product || mongoose.model("Product", productList)


export default Product
