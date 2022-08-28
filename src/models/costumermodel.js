const mongoose = require('mongoose');

const costumerSchema = new mongoose.Schema( {
    name: String,
    
    balance:Number, // Default balance at user registration is 100
    address:String,
    age: Number,
    
    gender: {
        type: String,
        enum: ["male", "female", "others"] 
    },
    isFreeAppUser:{type: Boolean, default: false},
    
   
}, { timestamps: true });

module.exports = mongoose.model('Coustmer', costumerSchema)