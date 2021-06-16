import './App.css';
import Home from './components/Home';

import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";
import React, { useEffect,useState } from 'react';
import GetRoom from './components/GetRoom';
import Create from './components/Create';
import Find from './components/Find';
import LogOut from './components/LogOut';
import Room from './components/Room';

import Err from './components/Err';





function App() {
  const [user,setUser] = useState({})
  useEffect(() => {
    axios.get("/getuser", { withCredentials: true}).then((res) => {
      
        setUser(res.data)
    });
}, []);
 
  return (
    <Router>
    <div className="App">
      
      <Switch>
       
        {
          user ? (
            <>
            <Route path='/' component={LogOut}/>
            <Route path='/error' exact component={Err}/>
            <Route path='/pollroom' exact component={GetRoom} />            
            <Route path='/pollroom/create' exact component={Create} />
            <Route path='/pollroom/find' exact component={Find} />
            <Route path='/pollroom/room/:id'component={Room} />
           
            <Route path='/' exact component={Home} />
            
             </>
           ) : (
            <Route path='/' component={Home} />
            
          )
        }
        
        
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
