import React, { Component } from 'react'

export class LogOut extends Component {
    LogOut =async() =>{
    
        window.open('https://pollroom.herokuapp.com/auth/logout',"_self")
       }
    

    render() {
        return (
            <div>
                <button className='btn btn-danger btn-sm' onClick={this.LogOut} style={{position:'fixed',left:'2vh',top:'2vh',zIndex:'2'}}>Log Out</button>
            </div>
        )
    }
}

export default LogOut
