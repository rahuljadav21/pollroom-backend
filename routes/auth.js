const { layout } = require('ejs-mate');
const express = require('express');
const passport = require('passport');
const router = express.Router()


router.get('/google',passport.authenticate('google',{scope : ['profile']}))



router.get('/google/callback',passport.authenticate('google',{failureRedirect : '/'}),(req,res)=>{
    res.redirect('http://localhost:3000/pollroom')
})

router.get('/logout',(req,res)=>{
    req.logOut()
    res.redirect('http://localhost:3000')
})

module.exports = router