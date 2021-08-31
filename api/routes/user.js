const express = require('express')
const bcrypt = require('bcrypt')
require('../mongoose')
const router = express.Router()
const User = require('../models/usermodel')
const Blog=require('../models/blog')
router.put("/:id",async (req,res)=>{
    if(req.body.id===req.params.id){
        if(req.body.password){
           const salt= await bcrypt.genSalt(10)
           req.body.password=await bcrypt.hash(req.body.password,salt)
           
        }
        try{
           const updateduser= await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            res.status(200).send(updateduser)
            console.log('this is updadted')
        }catch(e){
            res.status(401).send('error on'+e)
        }

    }
    else{
        res.send('not allowed')
    }
})
router.put("/:id",async (req,res)=>{
    if(req.body.id===req.params.id){
       try{
           const user =User.findById(req.params.id)

        try{
            const post=await Blog.findOne({username:user.name})
            const updateduser= await User.findByIdAndUpdate(req.params.id,{
                 $set:req.body
             },{new:true})
             res.status(200).send(updateduser)
             console.log('this is updadted')
         }catch(e){
             res.status(401).send('error on'+e)
         } }catch(e){}
        
        

    }
    else{
        res.send('not allowed')
    }
})
router.get("/:id",async (req,res)=>{

try{
const user= await User.findById(req.params.id)
if(!user){
    res.status(401).send('not authorized')

} else{
    const {password,createdAt,updatedAt,...others}=user._doc
res.status(200).send(others)

}}
catch(e){
    res.status(500).send('error on'+e)
}


})
module.exports=router