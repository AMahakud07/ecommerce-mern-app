import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewires
app.use(express.json());
app.use(morgan('dev'))


//routes
app.use('/api/v1/auth', authRoutes);

//rest api
app.get('/', (req,res) => {
    res.send("<h1>welcome to ecommerce app</h1>")
})

//port
const PORT = process.env.PORT;

//run listen
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`.bgCyan.white);
})


//PORT = 8080

// MONGO_URL = mongodb+srv://study4abhishek:JcQj6S4LkVifXSWQ@cluster0.b61okuk.mongodb.net/ecommerce