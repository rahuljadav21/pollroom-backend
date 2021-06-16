const { layout } = require('ejs-mate');
const express = require('express');
const passport = require('passport');
const router = express.Router()


router.get('/google',passport.authenticate('google',{scope : ['profile']}))



router.get('/google/callback',passport.authenticate('google',{failureRedirect : '/'}),(req,res)=>{
    res.redirect('https://pollroom.vercel.app/pollroom')
})

router.get('/logout',(req,res)=>{
    req.logOut()
    res.redirect('https://pollroom.vercel.app/')
})

module.exports = router