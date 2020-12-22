const { Schema } = require('mongoose');
const checkout = require('../Models/checkout');
exports.index = async(req,res)=>{
    res.render('checkout');
}
exports.store = (req,res)=>{
    const {first_name,last_name,email,mobileno,address,country,city,state,zip } = req.body;
    const schema = new Schema({
        FirstName:first_name,
        LastName:last_name,
        EMail:email,
        MobileNo:mobileno,
        Address:address,
        Country:country,
        City:city,
        State:state,
        ZIP:zip,
    })
    checkout.save().then((result)=>{
        console.log('checkout successful');
    }).catch(err=>{
        console.log('checkout not sucessful');
    })
    res.redirect('/');
}