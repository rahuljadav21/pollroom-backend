import React, { Component } from 'react'
export class Home extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        
     }
   }
   signIn =async() =>{
    
    window.open('https://pollroom.herokuapp.com/auth/google',"_self")
   }
  
  
    render() {
      document.title='Poll Room'
        return (
            
                <div className="card m-auto" style={{width: `18rem`,marginTop:`14vh`}}>
  <div className="card-body"  style={{marginTop:`14vh`}}>
    <h5 className="card-title"><i className="fas fa-poll"></i>  PollRoom</h5>
    <h6 className="card-subtitle mb-2 text-muted">Welcome to PollRoom.</h6>
    <p className="card-text">Here you can create Your Poll Room and polls </p>
    
    <button onClick={this.signIn} className="btn btn-danger"><i className="fab fa-google"></i>  SignIn</button>
  </div>
</div>
            
        )
    }
}

export default Home
