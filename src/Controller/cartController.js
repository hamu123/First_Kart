const cart = require('../Models/cart');
exports.index = async(req,res)=>{
    res.render('cart');
}