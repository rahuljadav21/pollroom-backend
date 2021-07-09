import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams,useHistory } from 'react-router'
import Polls from './Polls';
import {Link} from 'react-router-dom'


function Child({room,polls,user }) {
    const [question,setQuestion] = useState('')
    
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
       axios.post(`/pollroom/room/${room._id}`,{question:question },{
         "headers": {
         "content-type": "application/json",
         },
         })
         .then(function(response) {
             history.push(`/pollroom/room/${room._id}`)
             setQuestion('');
                     
         })
         .catch(function(error) {
           console.log(error);  
         });
         setQuestion('');
         };
    document.title=`${room.roomName}`
   return (
        <>
            <div id="title"><h3>{room.roomName}</h3>
            <p>Please submit each poll only if you sure. You can only submit once. </p>
            </div>
            <div className="container">
                <div className="poll-container">

                    {<Polls room={room} polls={polls} user={user} />}
                </div>
                <div className="add-container">
                    <form onSubmit={handleSubmit} method='post' >
                        <textarea value={question} onChange={e=>setQuestion(e.target.value)} required name="question" id="" cols="20" rows="10" placeholder="Paste/Type the question here"></textarea>
                        <button type='submit' style={{background:'#198754'}}>Add</button>
                        
                    </form>
                    <Link to='/pollroom'className='btn btn-sm btn-info'>Home</Link>

                </div>
            </div>

        </>
    );

}

function Parent() {

    const [room, setRoom] = useState({})
    const [polls, setPolls] = useState([])
    const { id } = useParams();
    const [time, setTime] = useState(false)

    setTimeout(() => {     
        setTime(!time);
     }, 3000);

    
   
    
 
    useEffect(() => {
       
        const fetchRoom = async () => {
            await axios.get(`/pollroom/room/${id}`, { withCredentials: true })
                .then((res) => {
    
                    setRoom(res.data)
                    setPolls(res.data.polls)
                });
    
        }
       
        fetchRoom();
    },[id,time]);
   


    const [user,setUser] = useState({})
    useEffect(() => {
      axios.get("/getuser", { withCredentials: true }).then((res) => {
         
          setUser(res.data)
      });
  }, []);

  



    return (
        <>

            {room && <Child room={room} polls={polls} user={user} />}

        </>
    );
}



export default Parent
