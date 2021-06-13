const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = require('./User')
const PollRoom = require('./PollRoom')

const PollSchema = Schema({
   
    question : {
        type : String,
        required : true,
    },
    option_1 : [{
        type : String,
    
    }],
    option_2 : [{
        type : String,
    }],
    option_3 : [{
        type : String,
    }],
    option_4 : [{
        type : String,
    }],
    sender : {
        type: String,
        required : true
       
    },
    room : {
        type: String,
        required:true
        
    }

})

module.exports = mongoose.model('Poll', PollSchema)