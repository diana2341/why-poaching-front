import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import './App.css';
import MapChart from "./component/MapChart";
import AnimalInfo from "./component/AnimalInfo";
import Community from "./component/Community";
import Poachers from "./component/Poachers";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import UserLogin from "./component/UserLogin";
import Resources from './component/Resources'



function App() {
  const [content, setContent] = useState("");
  const [username,setUsername]=useState('')

  const handleSubmit=(e)=>{
    e.preventDefault()
    // const username=this.state.username 
    fetch("http://localhost:4000/users",{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username})
    })
    .then(this.props.routerProps.history.push('/community'))
   
}

  return (
    <>
    {/* <MenuPop/> */}
    <Router>

  <Route exact path='/map' render={ (routerProps)=><MapChart routerProps={routerProps} setTooltipContent={setContent} />}/>
      <ReactTooltip>{content}</ReactTooltip>
      <Route exact path='/map/:animal/:id' render={(routerprops)=><AnimalInfo routerProps={routerprops}/>}/>
      <Route exact path='/login' render={(routerprops)=><UserLogin username={username}handleSubmit={handleSubmit} routerProps={routerprops}/>}/>
      <Route exact path='/community' render={(routerprops)=><Community routerProps={routerprops}/>}/>
      <Route exact path='/poachers' render={(routerprops)=><Poachers routerProps={routerprops}/>}/>
      <Route exact path='/resources' render={(routerprops)=><Resources routerProps={routerprops}/>}/>

    </Router>
    </>

  );
}

export default App;
