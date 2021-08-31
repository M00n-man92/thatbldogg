const mongoose=require('mongoose');
require('../mongoose')
const schema=new mongoose.Schema({
    name: { type: String, trim: true, sparse: true },
    email: { type: String, unique: true, trim: true },
    password: { type: String, min: [8], required: true, trim: true },
profilepic:{type:String,default:""}
},{timestamps:true});
const User =mongoose.model('users',schema);

module.exports=User;