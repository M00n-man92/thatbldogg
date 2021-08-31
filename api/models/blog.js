const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    title:{type:String},
    desc:{type:String},
    username:{type:String,unique:true},
img:{type:String,default:""},
catagory:{type:Array}

},{timestamps:true});
schema.path('username').index( {
    unique: true,
    partialFilterExpression: {
      __type: 'blogpost'
    }
  });
const BlogPost =mongoose.model('blogpost',schema);

module.exports=BlogPost;