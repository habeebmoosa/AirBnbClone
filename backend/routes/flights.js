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


router.post("/findone/:id", async(req,res)=>{
    const id = req.params.id;

    try{
        const response = await flightsModel.findOne({_id:id});
        res.json(response);
    }catch(error){
        res.json(error)
    }
})


router.post("/update/:id" , async(req,res)=>{
    const id = req.params.id;
    const {
        airline,
        departureTime,
        departureDate,
        ArrivalTime,
        ArrivalDate,
        economyPrice,
        businessPrice
    } = req.body;

    try{
        const response = await flightsModel.findByIdAndUpdate(id, {$set: {airline,
            departureTime,
            departureDate,
            ArrivalTime,
            ArrivalDate,
            economyPrice,
            businessPrice}})

        res.json(response);
    }catch(error){
        res.json(error);
    }
})


router.delete("/delete/:id", async(req,res)=>{
    const id = req.params.id;
    try {
        const response = await flightsModel.findOneAndRemove({_id:id})
        res.json(response);
    } catch (error) {
        res.json(error)
    }
})

export {router as flightsRouter}