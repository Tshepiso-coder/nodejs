const User = require("../models/User");
const path = require("path");

module.exports = async (req, res) => {
    try {
       const user = await User.create(req.body);
       console.log(user);
        res.redirect("/");
    } catch(error) {
        const validationErrors = Object.keys(error.errors).map(key => 
        error.errors[key].message);
        // req.session.validationErrors = validationErrors;
        req.flash('validationErrors',validationErrors);
        req.flash("data", req.body);
        return res.redirect("/auth/register")
    }
    
};