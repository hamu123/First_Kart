const mongoose = require('mongoose');

const CheckoutSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    EMail: String,
    MobileNo: String,
    Address: String,
    
    City: String,
    State:String,
    ZIP: String,

},{
    timestamps: true
});

module.exports = mongoose.model('Checkout',CheckoutSchema);