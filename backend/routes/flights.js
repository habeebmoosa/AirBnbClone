import express from 'express';

import { flightsModel } from '../models/flightsModel.js';

const router = express.Router();


router.post("/create",async (req,res)=>{
    try{
        const {
            flightNumber,
            airline,
            departureTime,
            departureDate,
            ArrivalTime,
            ArrivalDate,
            capacity,
            economyPrice,
            businessPrice
        } = req.body;

        const newFlight = new flightsModel({
            flightNumber,
            airline,
            departureTime,
            departureDate,
            ArrivalTime,
            ArrivalDate,
            capacity,
            economyPrice,
            businessPrice,
        })

        const response = await newFlight.save();
        res.status(201).json(response)
    }
    catch(error){
        res.json({msg:error})
    }
})

router.get("/list", async (req,res)=>{
    try{
        const response = await flightsModel.find({})
        res.json(response);

    }catch(error){
        res.json(error)
    }
})

export {router as flightsRouter}