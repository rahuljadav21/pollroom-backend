const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const User = require('./User')
const Poll = require('./Poll')

const PollRoomSchema = new Schema({
  roomName: {
    type: String,
    required: true,
  },
  creater: {
    type: Schema.Types.ObjectId,
    ref: 'User',
   
  },
  roomCode: {
    type: String,
    required: true,
  },
  polls : [
    {
      type: Schema.Types.ObjectId,
      ref: 'Poll'
  }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('PollRoom', PollRoomSchema)