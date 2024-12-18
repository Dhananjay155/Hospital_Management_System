import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from './Routes/auth.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: true,
};

//database
mongoose.set('strictQuery' , false)
const connectDB = async()=>{
    try{
        mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
        console.log('MongoDB database is connected');
        
    }catch (err){
        console.log('MongoDB database is connection failed');
        
    }
}

app.get("/", (req, res) => {
    res.send('Api is working')
});

//middleware

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/auth', authRoutes);


app.listen(port,()=>{
    connectDB(); 
    console.log('Server is running on port' + port );
    
})

