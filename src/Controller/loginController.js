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
        console.log('login sucessful');
    }).catch(err=>{
        console.log('login unsucessful');
    });

    res.redirect('/');

}

exports.signin = (req,res)=>{
    const {email,password} = req.body;
    const schema = new Schema({
        email:email,
        password:password
    });
    signin.findOne({email:email}).then((result)=>{
        console.log('Signin Sucessful');

    }).catch(err=>{
        console.log('Signin not sucessful');
    })
}