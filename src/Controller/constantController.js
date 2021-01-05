const constant = require('../Models/constant');
exports.index = async(req,res)=>{
    req.session.user = {name:'Saksham'}

    console.log(req.session.user)
    res.render('constant');
}