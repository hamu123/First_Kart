const Product = require('../Models/Product');

exports.index = async(req,res)=>{
    const product = await Product.find();
    res.render('productlist',{
        products:product
    });
}


exports.productStore = async(req,res) => {
    res.render('product-store');
}

exports.store = async(req,res) => {
    const {name,mrp,msp,desc} = req.body;

    const product = new Product({
        name,mrp,msp,desc
    }).save().then(result => {
        console.log('Product created having name with: ')

    });
    res.redirect('/store-product');
}