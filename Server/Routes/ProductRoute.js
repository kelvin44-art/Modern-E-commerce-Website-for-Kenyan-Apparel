import express from 'express';
import { AddProduct, GetProduct, GetproductByID } from '../Controllers/ProductControllers.js';
import uploads from '../Middleware/Multer.js';

const ProductRoute = express.Router();

ProductRoute.post('/addproduct', uploads.fields([{name: 'image1', maxCount: 1}, {name: 'image2', maxCount: 1}, {name: 'image3', maxCount: 1}, {name: 'image4', maxCount: 1}]) , AddProduct);
ProductRoute.get('/getproducts', GetProduct);
ProductRoute.get('/getproduct/:id', GetproductByID);

export default ProductRoute;