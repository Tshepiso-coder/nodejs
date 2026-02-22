const User = require("../models/User");
const path = require("path");

module.exports = async (req, res) => {
    try {
       const user = await User.create(req.body);
       console.log(user);
        res.redirect("/");
    } catch(error) {
        console.log(error);
        return res.redirect("/auth/register")
    }
    
};