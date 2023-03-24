const express = require('express')
const User = require('../models/User')
const router = express.Router()

//Register
router.get('/register', async(req, res) =>{
    const user = new User({
        username: req.body.username,
        email: req.body.email ,
        password: req.body.password,
    })
    await user.save();
    res.send('ok')
});

module.exports = router