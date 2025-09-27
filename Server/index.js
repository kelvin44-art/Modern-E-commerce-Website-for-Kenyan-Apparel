import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import ProductRoute from './Routes/ProductRoute.js';
import ConnectDB from './config/MongoDb.js';
import Cloudinaryconnect from './Middleware/Cloudinary.js';
import bodyParser from 'body-parser';

const app = express()
const PORT = 5000;
ConnectDB();
Cloudinaryconnect();

app.use(express.json());
app.use(cors())
app.use('/api/product', ProductRoute);


app.get('/', (req,res) => {
    res.send('api is running...');
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    
})

