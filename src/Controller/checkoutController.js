const { Schema } = require('mongoose');
const Checkout = require('../Models/checkout');
exports.index = async(req,res)=>{
    const checkout = await Checkout.find();
    res.render('checkout',{
        checkouts:checkout
    });
}

exports.store = (req,res)=>{
    const {first_name,last_name,email,mobile_no,address,city,state,zip } = req.body;
    console.log(req.body);
    const schema = new Checkout({
        FirstName:first_name,
        LastName:last_name,
        EMail:email,
        MobileNo:mobile_no,
        Address:address,
        
        City:city,
        State:state,
        ZIP:zip,
    }).save().then(result => {
        console.log('recorded')
    });
    res.redirect('/');
}