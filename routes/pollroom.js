const express = require('express');
const router = express.Router();
const { ensureAuth} = require('../middleware/auth')
const PollRoom = require('../models/PollRoom');

const Poll = require('../models/Poll');




router.post('/create',ensureAuth,(req,res)=>{
    console.log(req.body)
    const pollroom = new PollRoom({roomName : req.body.roomName,roomCode : req.body.roomCode})
    pollroom.creater = req.user._id
    pollroom.save()  
    res.send(pollroom); 
    })

router.post('/find',ensureAuth,async(req,res)=>{
    console.log(req.body)
   const pollroom = await PollRoom.findOne(req.body)
   if(!pollroom){
       res.send('RoomName or RoomCode is Wrong')
   }
   else{res.send(pollroom)}
   //console.log(pollroom)
})
router.get('/room/:id',ensureAuth,async(req,res)=>{
    const {id} = req.params;
    const pollroom = await PollRoom.findById(id).populate('polls')
    res.send(pollroom);

})

router.post('/room/:id',ensureAuth,async(req,res)=>{
    const {id} = req.params;
    const {question} = req.body;
    //console.log(req.body)
    const pollroom = await PollRoom.findById(id).populate('polls')
    const poll = new Poll({question:question,room:pollroom.roomName})
    poll.sender = req.user.displayName    
    await poll.save()
    pollroom.polls.push(poll);
    await pollroom.save()
    
    //console.log(poll)
})

router.post('/room/:id/poll/:qId',ensureAuth,async(req,res)=>{
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
     res.send(pollroom); 
})

module.exports = router