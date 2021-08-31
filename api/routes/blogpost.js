const express = require('express')


const router = express.Router()
const User = require('../models/usermodel')
const Blog = require('../models/blog')
const { findById } = require('../models/usermodel')
const BlogPost = require('../models/blog')


//Create
router.post("/blog", async (req, res) => {
    const { title, desc, img, catagory, username } = req.body;
    const data = { title, desc, img, catagory, username }
    try {
        const blog = await Blog(data)
        await blog.save(function (e, done) {
            if (e) { res.status(500).send('error on' + e) }
            else { res.status(200).send(blog) }
        })

    } catch (e) {
        res.status(500).send('an error on' + e)

    }



})
//deletet
router.delete("/blog/delete/:id", async (req, res) => {

    try {
        const id = req.params.id

        const blog = await Blog.findByIdAndDelete(id)
        if (!blog) {
            res.status(401).send('no such blog here')
        }
        else {
            res.status(200).send('the deed is done sire')
        }


    }
    catch (e) {
        res.status(500).send('an error on' + e)
    }

})

///Update

router.put("/:id", async (req, res) => {
    const id = req.params.id
    const post = await Blog.findById(id)
    if (post.username === req.body.username) {
        try {
            const blog = await Blog.findByIdAndUpdate(id, {
                $set: req.body
            }, { new: true })



            res.status(200).send(blog)

        }
        catch (e) {
            res.status(500).send('error on' + e)
        }
    }


})

///show single post
router.get("/:id", async(req, res) => {
    const id = req.params.id
    try {
        const user = await BlogPost.findById(id)
        res.send(user)
    }
    catch (e) {
        res.status(500).send('error on' + e)
    }



})
///show alot of posts
router.get("/",async (req, res) => {

    const username=req.query.name
    const catagory=req.query.cat
    try {
        let posts
       if(username){
           posts= await BlogPost.find({username})
           if(!posts){res.send('sorry no such tihng')}
           
       }
       else if(catagory){
           posts=await BlogPost.find({catagory:{$in:[catagory]}})
           if(!posts){res.send('sorry no such tihng')}
       }
       else{
           posts=await BlogPost.find({})
           if(!posts){res.send('sorry no such tihng')}
           
       }
       res.send(posts)
    }
    catch (e) {
        res.status(500).send('error on' + e)
    }


})
module.exports = router