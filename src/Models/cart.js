const mongoose = require('mongoose');

const  cartSchema = new mongoose.Schema({
    productname: String,
    price: String,
    quantity: String,
    total: String,
   
},{
    timestamps: true
});

module.exports = mongoose.model('cart',cartSchema);