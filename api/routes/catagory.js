const express = require('express')


const router = express.Router()


const Cat=require('../models/catagorymod')


//Create
router.post("/", async (req, res) => {
   
   
    try {
        const catagory = await Cat(req.body)
        await catagory.save(function (e, done) {
            if (e) { res.status(500).send('error on' + e) }
            else { res.status(200).send(catagory) }
        })

    } catch (e) {
        res.status(500).send('an error on' + e)

    }



})
router.get('/',async (req,res)=>{

    try {
        const catagory = await Cat.find()
        if(!catagory){res.send('not there')}
        else{res.status(200).send(catagory)}
    } catch (e) {
        res.status(500).send('an error on' + e)

    }


})
module.exports=router