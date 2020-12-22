const productlist = require('../Models/productlist');
exports.index = async(req,res)=>{
    res.render('productlist');
}
