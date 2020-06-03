import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import './App.css';
import MapChart from "./component/MapChart";
import AnimalList from './component/AnimalList'


function App() {
  const [content, setContent] = useState("");

  return (
    <>
          <AnimalList/>

      <MapChart setTooltipContent={setContent} />
      <ReactTooltip>{content}</ReactTooltip>
   
    </>

  );
}

export default App;
