//import mongoose
const mongoose = require('mongoose')
//create schema
const userschema = new mongoose.Schema({
    u_id : Number,
    u_name: String,
    u_pwd: String,
    u_email: String,
    u_addr: String,
    u_contact : String
}
)
module.exports = mongoose.model("User",userschema)