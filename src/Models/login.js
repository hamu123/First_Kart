const mongoose = require('mongoose');

const  loginSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    EMail: String,
    MobileNo: String,
    Password:String,
    RetypePassword:String,

},{
    timestamps: true
});

module.exports = mongoose.model('login',loginSchema);