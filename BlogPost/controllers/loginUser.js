const bcrypt = require('bcrypt') 
const User = require('../models/User') 

module.exports = async (req, res) =>{ 
// const username = req.body.username;
// const password = req.body.password;

//deconstract username and password
const { username, password } = req.body; 
try {
    const user = await User.findOne({username:username});
    if (user) {
        const same = await bcrypt.compare(password, user.password)
        if (same) {
            res.redirect("/")
        } else {
            //password incorrect
            console.log("Password incorrect");            
            res.redirect('/auth/login')  
        }
    }
    else {
        //user or password incorrect
        console.log("User not found");        
        res.redirect('/auth/login') 
    }
} catch(error) {
    console.log(error);    
}
}
