import  express from 'express';
import colors from 'colors';
import dotenv from "dotenv"
import morgan from 'morgan';
import connectDB from './config/db.js';
import authroutes from './routes/authroutes.js'
import cors from 'cors'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import path from 'path'
import {fileURLToPath} from 'url'


//configure dotnev
dotenv.config();
//database config
connectDB();

//es module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//rest object
const app = express()

// middleware
app.use(cors());  
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'client', 'build')));

//routes
app.use('/api/v1/auth',authroutes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/product',productRoutes)


//rest api
app.use('*',function(req,res){
   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

//port
const PORT = process.env.PORT || 8080 ;

//run listen
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`.bgCyan.white)

})
