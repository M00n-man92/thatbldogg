const express = require('express')
const bcrypt = require('bcrypt')
require('../mongoose')
const router = express.Router()
const User = require('../models/usermodel')
router.post('/register', async (req, res) => {
    const saltRounds = 10;
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(password, salt)

    const user = new User({ name: name, email: email, password: hash })
    try {
        const em=await User.findOne({email})
        if(em){
            res.status(400).send('duplicated email')
        }
        else{user.save(function (e, done) { if (e) { console.log('error on' + e) } else { console.log('saved' + done) } })
        res.status(200).send(user)}
        
    } catch (e) {
        res.status(500).send('there has been an error on ' + e)
    }

})
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {

        const user = await User.findOne({ email })
        if (!user) {
            console.log('wrong stuff')
            res.status(400).send('wrong stuff')
        }
        else {
            const bycrpt = await bcrypt.compare(password, user.password)
            if (!bycrpt) {
                console.log('wrong stuff')
                res.status(400).send('wrong stuff')
            }
            else {
                res.status(200).send(user)
            }
        }
    } catch (e) {
        res.status(500).send('error on' + e)
    }
})
module.exports = router;