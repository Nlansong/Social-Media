const express = require('express')
const router = express.Router()

//get user
router.get('/', (req, res) =>{
    res.send('welcome user')
})
 //update user
 router.put('/:id', (req, res) =>{
    if(req.body.userId === req.params.id || req.user.isAdmin){

    } else{
        return res.status(403).json('you can update only your account')
    }
 })
 //deelete user
 //follow user
 //unfollow user


module.exports = router