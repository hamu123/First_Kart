const { Schema } = require('mongoose');
const login = require('../Models/login');
exports.index = async(req,res)=>{
    res.render('login');
}
exports.store = (req,res)=>{
   
    const {first_name,last_name,email,mobile,password,re_passsword} = req.body;
    const Login = new login({
        FirstName:first_name,
        LastName:last_name,
        EMail:email,
        MobileNo:mobile,
        Password:password,
        RetypePassword:re_passsword,
    });
    Login.save().then((result)=>{
        console.log('login sucessful');
    }).catch(err=>{
        console.log('login unsucessful');
    });
    res.redirect('/');
}