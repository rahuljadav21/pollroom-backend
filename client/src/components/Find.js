import React, { useState} from 'react'
import axios from 'axios'
import { useHistory} from "react-router";



function Find() {
  const [roomName,setroomName ]= useState('')
  const [roomCode,setroomCode ] = useState('')
  const [err,setErr]=useState('')
  const history = useHistory();
  const handleSubmit = (e) => {
     e.preventDefault()
    axios.post('/pollroom/find',{roomName :roomName,roomCode : roomCode},{
      "headers": {
      "content-type": "application/json",
      },
      })
      .then(function(response) {
       
        if(response.data==='RoomName or RoomCode is Wrong'){
          setErr(response.data)
        }else{
          
          window.open(`https://pollroom.herokuapp.com/pollroom/room/${response.data._id}`,"_self")

        }
           
      })
      .catch(function(error) {
        console.log(error);  
      });
      
      };
  
 
  return (
    <> 

    <div>
      
      {(err.length !==0)?(<div className="alert alert-warning alert-dismissible fade show" role="alert">
       <strong>Error :</strong> {err}
     <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>):''}
      
    <h1 className="mt-3">Find Room</h1>
    <form onSubmit={handleSubmit} className="container validate-form" noValidate style={{display:'flex',flexDirection:'column',alignItems:'center'}} action="/pollroom/find" method="get">
      <div className="container mt-4" style={{ width: `20rem`, marginTop: `8vh`, display:'flex',flexDirection:'column' }}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">Room :</span>
          <input required onChange={e=>{setroomName(e.target.value)}} type="text" className="form-control" id="basic-url1" placeholder="Room Name" name="roomName" aria-describedby="basic-addon3" />
         
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon2">Room Code :</span>
          <input required onChange={e=>{setroomCode(e.target.value)}} type="password" className="form-control" id="basic-url" name="roomCode" aria-describedby="basic-addon2" />
        </div>
      
      </div>
  
     <button className='btn btn-info' type='submit'>join</button>    
    </form>
  </div>
  </>
  )
}

export default Find
