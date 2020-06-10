import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import './App.css';
import MapChart from "./component/MapChart";
import AnimalInfo from "./component/AnimalInfo";
import Community from "./component/Community";


import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  const [content, setContent] = useState("");

  return (
    <Router>

  <Route exact path='/map' render={ (routerProps)=><MapChart routerProps={routerProps} setTooltipContent={setContent} />}/>
      <ReactTooltip>{content}</ReactTooltip>
      <Route exact path='/map/:id' render={(routerprops)=><AnimalInfo routerProps={routerprops}/>}/>
      <Route exact path='/community' render={(routerprops)=><Community routerProps={routerprops}/>}/>

    </Router>

  );
}

export default App;
