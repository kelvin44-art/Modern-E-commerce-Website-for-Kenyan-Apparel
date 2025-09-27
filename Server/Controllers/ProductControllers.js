import { v2 as cloudinary } from "cloudinary";
import ProductModel from "../Modal/ProductModel.js";
import { useParams } from "react-router-dom";

const AddProduct = async (req, res) => {
    
    try {
        const {name, description, price, availableQty, image, category, size, color, room} = req.body;
        const image1 = req.files.image1[0] && req.files.image1[0]
        const image2 = req.files.image2[0] && req.files.image2[0]
        const image3 = req.files.image3[0] && req.files.image3[0]
        const image4 = req.files.image4[0] && req.files.image4[0]
        if(!name || !description || !price || !availableQty || !category || !size || !color || !room){
            return res.status(400).json({message: 'Please fill all the fields'})
        }

        const images = [image1, image2, image3, image4].filter(item => item !== undefined)

        const imageUrl = await Promise.all(images.map(async (file) => {
            const result = await cloudinary.uploader.upload(file.path);
            return result.secure_url;
        }))
       console.log(imageUrl);
        const newProduct = new ProductModel({
            name,
            description,
            price : Number(price),
            image: imageUrl,
            availableQty,
            category,
            size,
            color,
            room
        });
        await newProduct.save();
        return res.status(201).json({message: 'Product added successfully', product: newProduct})
    
    } catch (error) {
        console.error(error)
        return res.status(500).json({message: error.message})
    }
}

const GetProduct = async (req, res) => {
    try {
        const products = await ProductModel.find();
        // Convert Mongoose documents to plain JS objects
        const plainProducts = products.map(product => product.toObject());
        res.json({ success: true, products: plainProducts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const GetproductByID = async (req, res) => {
    const {id} = req.params
   try{
        
    const product = await ProductModel.findById(id);
    res.json({ success: true, product: product ? product.toObject() : null });

   } catch(error){
    return res.json({success: false, message: error.message})
   }
    
}

export {AddProduct, GetProduct, GetproductByID}