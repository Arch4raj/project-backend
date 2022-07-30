//convert schema to model

const  mongoose=require("mongoose");
const foodSchema = new mongoose.Schema({
    foodName: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
    },
    image :{
        type:String,
        required:true,
        trim: true
    }
});
module.exports = mongoose.model("Veg", foodSchema);