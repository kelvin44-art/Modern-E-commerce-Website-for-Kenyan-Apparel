import mongoose from "mongoose";

const ConnectDB = async (req, res) => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/drake`);
        console.log('MongoDB connected successfully');
    } catch (error) {

        return res.status(500).json({success: false, message: 'Database connection failed'})
    }
}
export default ConnectDB;