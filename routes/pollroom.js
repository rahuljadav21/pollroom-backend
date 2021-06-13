const express = require('express');
const router = express.Router();
const { ensureAuth} = require('../middleware/auth')
const PollRoom = require('../models/PollRoom');

const Poll = require('../models/Poll');

const catchAsync = require('../utils/catchAsync');



router.post('/create',ensureAuth,catchAsync(async(req,res)=>{
    const pollroom = new PollRoom({roomName : req.body.roomName,roomCode : req.body.roomCode})
    pollroom.creater = req.user._id
    await pollroom.save()
    res.redirect(`https://pollroom.netlify.app/pollroom/room/${pollroom._id}`)
    }))

router.post('/find',ensureAuth,catchAsync(async(req,res)=>{
   const pollroom = await PollRoom.findOne(req.body);
  

   res.redirect(`https://pollroom.netlify.app/pollroom/room/${pollroom._id}`)
}))
router.get('/room/:id',ensureAuth,catchAsync(async(req,res)=>{
    const {id} = req.params;
    const {question} = req.body;
    const pollroom = await PollRoom.findById(id).populate('polls')
    res.send(pollroom)

}))

router.post('/room/:id',ensureAuth,catchAsync(async(req,res)=>{
    const {id} = req.params;
    const {question} = req.body;
    const pollroom = await PollRoom.findById(id)
    const poll = new Poll({question :question,sender:req.user.displayName,room:pollroom.roomName})
    await poll.save()
    pollroom.polls.push(poll);
    await pollroom.save()
    
    res.redirect(`https://pollroom.netlify.app/pollroom/room/${pollroom._id}`)
}))
router.post('/room/:id/poll/:qId',catchAsync(async(req,res)=>{
    const {id,qId} = req.params;
    const pollroom = await PollRoom.findById(id)    
     var poll = await Poll.findById(qId); 
     const {ans} = req.body;
     if(!poll.option_1.includes(req.user._id) && !poll.option_2.includes(req.user._id) && !poll.option_3.includes(req.user._id) && !poll.option_4.includes(req.user._id) ){



     if(ans=='option_1'){
         if(!poll.option_1.includes(req.user._id)){
         poll.option_1.push(req.user._id)
         }
     }else if(ans=='option_2'){
        if(!poll.option_2.includes(req.user._id)){
        poll.option_2.push(req.user._id)
        }
    }else if(ans=='option_3'){
        if(!poll.option_3.includes(req.user._id)){
        poll.option_3.push(req.user._id)
        }
    }else if(ans=='option_4'){
        if(!poll.option_4.includes(req.user._id)){
        poll.option_4.push(req.user._id)
         

      }

    }
    const npoll = await Poll.findByIdAndUpdate(qId,poll)
    npoll.save()
  
     }
   res.redirect(`https://pollroom.netlify.app/pollroom/room/${pollroom._id}`)    
}))

module.exports = router