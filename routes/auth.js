const express = require('express');
const passport = require('passport');
const router = express.Router()


router.get('/google',passport.authenticate('google',{scope : ['profile']}))



router.get('/google/callback',passport.authenticate('google',{failureRedirect : '/'}),(req,res)=>{
    res.redirect('https://pollroom.herokuapp.com/pollroom')
})

router.get('/logout',(req,res)=>{
    req.logOut()
    res.redirect('https://pollroom.herokuapp.com/')
})

module.exports = router