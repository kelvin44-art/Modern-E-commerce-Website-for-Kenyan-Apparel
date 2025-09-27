import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    image: {type: Array, required: true},
    price: {type: Number, required: true},
    availableQty: {type: Number, required: true},
    category: {type: String, required: true},
    size: {type: Array, required: true},
    color: {type: Array, required: true},
    room: {type: String, required: true},
});

const ProductModel = mongoose.model('Products', ProductSchema, 'Products');
export default ProductModel;