const mongoose = require('mongoose');
//const moment = require('moment');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
coustmerID:  {
    type: ObjectId,
    ref: "Coustmer"
},
productID:{
    type: ObjectId,
    ref: "Product"
},
amount:Number,
isFreeAppUser: Boolean,
date:String
    
 
},{ timestamps: true })

module.exports = mongoose.model('Order', orderSchema)