var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String
    },
    phone:{
        type:String,
        
    },
    otp:{
        type:String
    },
});
module.exports = mongoose.model("otp",userSchema);