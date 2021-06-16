
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  
})

router.get('/getuser', (req, res) => {
    res.send(req.user);
  })
module.exports = router