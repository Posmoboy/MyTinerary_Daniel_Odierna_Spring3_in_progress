import { Schema, model } from "mongoose";

const citySchema = new Schema({
    
        img: { type: String, required: true},
        name: { type: String, required: true},
        country: { type: String, required: true},
        population: { type: Number, required: true},
        currency: { type: String, required: true},
        tourist_spots: { type: String, required: true},
}, {
    timestamps: true
}
)

const City = model("city", citySchema)

export default City;