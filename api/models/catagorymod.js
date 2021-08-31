const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    catname:{type:String}
    

},{timestamps:true});

const Cata =mongoose.model('catagory',schema);

module.exports=Cata;