
const express = require('express');
const router = express.Router();



router.get('/getuser', (req, res) => {
    res.header('Access-Control-Allow-Origin','*')
    res.send(req.user);
  })
module.exports = router