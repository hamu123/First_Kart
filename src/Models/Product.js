const mongoose = require('mongoose');

const  ProductSchema = new mongoose.Schema({
    name: String,
    mrp: String,
    msp:String,
    desc:String,
    image:String,

},{
    timestamps: true
});

module.exports = mongoose.model('product',ProductSchema);