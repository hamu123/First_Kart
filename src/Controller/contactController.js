const Contact = require('../Models/contact');

exports.index = async(req,res)=>{
    res.render('contact');
}

exports.store = (req,res) =>{
    const {name,email,subject,message} = req.body;
    const contact = new Contact({
        name,email,subject,message
    }).save().then(result => {
        console.log('Contact has been recorded!');
    });
    

    res.redirect('/contact');
}