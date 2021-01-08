const cart = require('../Models/cart');
exports.index = async(req,res)=>{
    res.render('cart');
}
exports.store = async(req,res)=>{
    const {productname,price,quantity,total} = req.body;
    const cart = new Cart({
            productname:productname,
            price:price,
            quantity:quantity,
            total:total,
    });
    cart.save().then((result)=>{
        console.log('product added');
    }).catch(err=>{
        console.log('product not added');
    });
    res.redirect('/');
}
exports.update = async(req,res)=>{
    const {productname,price,quantity,total} = req.body;
    const cart = new Cart({
        productname:productname,
        price:price,
        quantity:quantity,
        total:total,
    });
    cart.findByIdAndUpdate(id).then((result)=>{
        console.log('product  updated');
    }).catch(err=>{
        console.log('product not updated');
    });
    res.redirect('/');
}
exports.delete = async(req,res)=>{
    cart.findByIdAndDelete(id).then((result)=>{
        console.log('product deleted');
    }).catch(err=>{
        console.log('product not deleted');
    });
    res.redirect('/');
}