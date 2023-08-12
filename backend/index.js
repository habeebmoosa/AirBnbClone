import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import { flightsRouter } from './routes/flights.js';

const app = express();

app.use(express.json());
dotenv.config();
app.use(cors())

app.use("/api/flights",flightsRouter);

mongoose.connect(
    process.env.MONGO_URI
).then(()=>{
    console.log("Database is connected")
})

app.listen(process.env.PORT, ()=>{
    console.log("Server started");
})