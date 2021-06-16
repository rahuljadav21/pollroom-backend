import React, { useState} from 'react'
import axios from 'axios'
import { useHistory} from "react-router";


function Create() {

  const [roomName,setroomName ]= useState('')
  const [roomCode,setroomCode ] = useState('')
  const history = useHistory();
  const handleSubmit = (e) => {
     e.preventDefault()
    axios.post('/pollroom/create',{roomName :roomName,roomCode : roomCode},{
      "headers": {
      "content-type": "application/json",
      },
      })
      .then(function(response) {
      window.open(`https://pollroom.herokuapp.com/pollroom/room/${response.data._id}`,"_self")
      })
      .catch(function(error) {
        console.log(error);  
      });
      
      };

  
  return (
    <div>
      <h1 className="mt-3">Create Room</h1>
      <form onSubmit={handleSubmit} className="container validate-form" noValidate style={{display:'flex',flexDirection:'column',alignItems:'center'}}  method="post">
        <div className="container mt-4" style={{ width: `20rem`, marginTop: `8vh`, display:'flex',flexDirection:'column' }}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Room :</span>
            <input required onChange={e=>{setroomName(e.target.value)}} type="text" className="form-control" id="basic-url" placeholder="Room Name" name="roomName" aria-describedby="basic-addon3" />
            
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">Room Code :</span>
            <input required onChange={e=>{setroomCode(e.target.value)}} type="password" className="form-control" id="basic-url" name="roomCode" aria-describedby="basic-addon3" />
          </div>
          
        </div>

        <button type="submit" className="btn btn-success">Create</button>

      </form>
    </div>
  )
}

export default Create
