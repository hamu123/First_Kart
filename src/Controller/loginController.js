const { Schema } = require('mongoose');
const login = require('../Models/login');
const bcrypt = require ('bcrypt');
const saltRounds = 10;
exports.index = async(req,res)=>{
    res.render('login');
}
exports.store = (req,res)=>{
   
    const {first_name,last_name,email,mobile,password,re_passsword} = req.body;
    

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPass =  bcrypt.hashSync(password, salt);

    const Login = new login({
        FirstName:first_name,
        LastName:last_name,
        EMail:email,
        MobileNo:mobile,
        Password:hashedPass,
    });

    Login.save().then((result)=>{
        console.log('register sucessful');
    }).catch(err=>{
        console.log('register unsucessful');
    });

    res.redirect('/');

}
exports.PostLogin = async (req,res)=>{
    const {email,password} = req.body;
    const user = await login.findOne({email:email});
    
    console.log(user);
}