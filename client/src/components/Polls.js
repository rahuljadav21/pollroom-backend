import React,{useState} from 'react'
import {useHistory } from 'react-router'
import '../Poll.css';
import axios from 'axios'

function Polls({room,polls,user}) {
    const history = useHistory();
    const [ans,setAns] = useState('');
    const [pollId,setpollId]=useState('');
    const handleSubmit = (e) => {
       
        axios.post(`/pollroom/room/${room._id}/poll/${pollId}`,{ans : ans},{
          "headers": {
          "content-type": "application/json",
          },
          })
          .then(function(response) {
           history.go(0)
           
          })
          .catch(function(error) {
            console.log(error);  
          });
          
          };

   
    return (
        <>
          
            {
                
               
            polls.map(p=>{
                let a = (p.option_1.length+p.option_2.length+p.option_3.length+p.option_4.length===0)?0:(p.option_1.length*100)/(p.option_1.length+p.option_2.length+p.option_3.length+p.option_4.length)
                let b = (p.option_1.length+p.option_2.length+p.option_3.length+p.option_4.length===0)?0:(p.option_2.length*100)/(p.option_1.length+p.option_2.length+p.option_3.length+p.option_4.length)
                let c = (p.option_1.length+p.option_2.length+p.option_3.length+p.option_4.length===0)?0:(p.option_3.length*100)/(p.option_1.length+p.option_2.length+p.option_3.length+p.option_4.length)
                let d = (p.option_1.length+p.option_2.length+p.option_3.length+p.option_4.length===0)?0:(p.option_4.length*100)/(p.option_1.length+p.option_2.length+p.option_3.length+p.option_4.length)
                
              
                return (
            <div className="poll" key={p._id} >
                <div className="que">Question :{p.question} </div>
               
                <div className="res">
                    <form className="validate-form" noValidate onSubmit={handleSubmit}>
                    <div className="opt">
                        <label id='1'>A</label>
                              <input type="radio" onChange={e=>{setAns(e.target.value);setpollId(p._id)}} defaultChecked={p.option_1.includes(user._id)} disabled={p.option_1.includes(user._id)||p.option_2.includes(user._id)||p.option_3.includes(user._id)||p.option_4.includes(user._id)} name='ans'value='option_1' id="1"/>
                              <progress value={a} max="100">
                            
                        </progress>
                    </div>
                    <div className="opt">
                        <label id='1'>B</label>
                              <input type="radio" onChange={e=>{setAns(e.target.value);setpollId(p._id)}} defaultChecked={p.option_2.includes(user._id)} disabled={p.option_1.includes(user._id)||p.option_2.includes(user._id)||p.option_3.includes(user._id)||p.option_4.includes(user._id)} name='ans'value='option_2' id="1"/>
                              <progress value={b} max="100">
                            
                        </progress>
                    </div>
                    <div className="opt">
                        <label id='1'>C</label>
                              <input type="radio"onChange={e=>{setAns(e.target.value);setpollId(p._id)}} defaultChecked={p.option_3.includes(user._id)} disabled={p.option_1.includes(user._id)||p.option_2.includes(user._id)||p.option_3.includes(user._id)||p.option_4.includes(user._id)} name='ans'value='option_3' id="1"/>
                              <progress value={c} max="100">
                            
                        </progress>
                    </div>
                    <div className="opt">
                        <label id='1'>D</label>
                              <input type="radio" onChange={e=>{setAns(e.target.value);setpollId(p._id)}} defaultChecked={p.option_4.includes(user._id)} disabled={p.option_1.includes(user._id)||p.option_2.includes(user._id)||p.option_3.includes(user._id)||p.option_4.includes(user._id)} name='ans'value='option_4' id="1"/>
                              <progress value={d} max="100">
                            
                        </progress>
                    </div>


                    {(p.option_1.includes(user._id)||p.option_2.includes(user._id)||p.option_3.includes(user._id)||p.option_4.includes(user._id))?'':(<button type='submit'className='btn btn-danger btn-sm'>Submit</button>)}

                    </form>
                </div>
                <span>- by {p.sender} </span> 
               
            </div>
            )})}   
                           
       
       </>
    )
}


export default Polls