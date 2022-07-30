const  mongoose=require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName : {
        type: String,
        required: true,
        trim: true
    },
    address : {
        type: String,
        required: true,
        trim: true
    },
    phno: {
        type: Number,
        required: true,
    },
    email : {
        type: String,
        required: true,
        trim: true
    },
    hashedPassword:{
        type:String,
        required:true,
        trim: true
    }
});
module.exports = mongoose.model("Users", userSchema);