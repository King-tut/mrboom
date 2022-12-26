import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
 
import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import managementRoutes from './routes/management.js'
import salesRoutes from './routes/sales.js'

 
//Connecting to MongoDB mongodb://127.0.0.1:5003/mrboom
const PORT = process.env.PORT || 9000

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB CONNECTED")
}).catch((error)=>{
    console.log("There was an error")

})


//configurations


const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

//Routes

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);


app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}`)
})