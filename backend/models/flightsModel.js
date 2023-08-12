import mongoose from "mongoose";

const flightsSchema = mongoose.Schema({
    flightNumber:{
        type: Number,
        required: true,
        unique: true,
    },
    airline:{
        type: String,
        required: true,
    },
    departureTime: {
        type: String,
        required: true,
    },
    departureDate: {
        type: String,
        required: true,
    },
    ArrivalTime: {
        type: String,
        required: true,
    },
    ArrivalDate: {
        type: String,
        required: true,
    },
    capacity:{
        type:Number,
        required: true,
    },
    economyPrice:{
        type: Number,
        required: true,
    },
    businessPrice:{
        type:Number,
        required: true,
    }
},{timestamp:true})

const flightsModel = mongoose.model("flights",flightsSchema);

export {flightsModel}