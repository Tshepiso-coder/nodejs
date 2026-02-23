const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const uniqueValidator = require("mongoose-unique-validator").default;
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: [true,'Please provide username'],
    },
    password: { 
        type: String,
        required: [true,'Please provide password'],  
    }
});
UserSchema.plugin(uniqueValidator);

UserSchema.pre('save', async function(next){ 
    try {
        //user has plain text password
        const user = this; 
        const hash = await bcrypt.hash(user.password, 10);
        user.password = hash;       
    } catch(error) {
        console.log(error);
        next(error);
    }
});
 
//export model
const User = mongoose.model("User", UserSchema);
module.exports = User
