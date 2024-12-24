const user = require("../models/userSchema");

const regiser = async(req,res) => {
    try {

    } catch(err) {
        
    }
}
const getAllUsers = async(req, res) => {
    try{
        await user.find()
    }
    catch(err) {
        res.status(404).json({message: "user not found"});
    }
}