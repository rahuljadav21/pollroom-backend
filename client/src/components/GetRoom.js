import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class GetRoom extends Component {
    render() {
      document.title='Poll Room'
        return (<>
          <div className='container m-auto my-5' style={{
    width:'80vh',
    marginTop:'7vh',
    
}}>
          <h4>Create New Room with room code and you can also Enter with shared room Code. </h4>
          </div>

            <div style={{
    display: 'flex',
    flexwrap: 'wrap',
    marginTop:'3vh',
    justifyContent:'center',
    alignItems: 'center',
    flexWrap:'wrap',
    flexDirection:'row',
    alignContent:'center'


}}>
            <Link to='/pollroom/find' style={{marginRight:'5vh'}} className='btn btn-sm btn-info'>Join</Link>
            <Link to='/pollroom/create' className='btn btn-sm btn-success'>Create</Link>
            </div>
          </>
        )
    }
}

export default GetRoom
