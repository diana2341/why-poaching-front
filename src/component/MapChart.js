import React, { memo, useState,useEffect} from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import AnmialList from "./AnimalList";
import MenuPop from './MenuPop'



const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
  const rounded = num => {
    if (num > 1000000000) {
      return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
      return Math.round(num / 100000) / 10 + "M";
    } else {
      return Math.round(num / 100) / 10 + "K";
    }
  };

 
const MapChart = (props) => {
  const [lemurs,setLemurs]=useState([])
  const [tigers,setTigers]=useState([])
  const [elephants,setElephants]=useState([])
  const [gorillas,setGorillas]=useState([])
  const [rhinos,setRhinos]=useState([])
  const [orangatan,setOrangatan]=useState([])
  const [animal,setAnimal]=useState([])
  const [show,setShow]=useState(0)
  const [background,setbackground]=useState(true)


  const [filter,setFilter]=useState([])


  const mapFilter=(event)=>{
  
    if(event.target.id==="Tiger"){
       setFilter(tigers) 
      setShow(1)
    }
    if(event.target.id==="Elephant"){
       setFilter(elephants)
       setShow(2)

    }
    if(event.target.id==="Gorilla"){
       setFilter(gorillas)
       setShow(3)

    }
    if(event.target.id==="Lemur"){
       setFilter(lemurs)
       setShow(4)

    }
    if(event.target.id==="Rhino"){
       setFilter(rhinos)
       setShow(5)

    }
    if(event.target.id==="Orangutan"){
       setFilter(orangatan)
       setShow(6)

    }
   }


    useEffect(() => {
      const fetchData = async () => {
        await fetch(
          'https://why-poaching-back.herokuapp.com/locations',
        )
        .then(resp=>resp.json())
          .then(data=>{ 
                setTigers( data.filter(location=>  location.animal_id===1).map(l=>{return {coordinates:[l.longtitude ,l.latitude]}}))
                setElephants( data.filter(location=>  location.animal_id===2).map(l=>{return {coordinates:[l.longtitude ,l.latitude]}}))
                setGorillas( data.filter(location=>  location.animal_id===3).map(l=>{return {coordinates:[l.longtitude ,l.latitude]}}))
                setLemurs( data.filter(location=>  location.animal_id===4).map(l=>{return {coordinates:[l.longtitude ,l.latitude]}}))
                setRhinos( data.filter(location=>  location.animal_id===5).map(l=>{return {coordinates:[l.longtitude ,l.latitude]}}))
                setOrangatan( data.filter(location=>  location.animal_id===6).map(l=>{return {coordinates:[l.longtitude ,l.latitude]}}))
          })
      };
      const fetchAnimals = async () => {
        await fetch(
          'https://why-poaching-back.herokuapp.com/animals',
        )
        .then(resp=>resp.json())
          .then(data=>{ 
                setAnimal(data)
              
          })
          .then(setbackground(false))
       
      };
      fetchData();
      fetchAnimals()

    }, []);
  return (

    <>
    {console.log(animal)}
        <MenuPop/>

  <AnmialList background ={background}routerProps={props.routerProps}animal={animal}mapFilter={mapFilter} show={show}/>
    <div  className="Map">



    <ComposableMap data-tip="" projectionConfig={{ scale: 120 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo,index) =>
             <Geography
            //  key={index}
             stroke="white"
             strokeOpacity="0.02"
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                const { NAME, POP_EST } = geo.properties;
                props.setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
              }}
              onMouseLeave={() => {
                props.setTooltipContent("");
              }}
              style={{
                default: {
                  fill: "#034930",
                  outline: "none"
                },
                hover: {
                  fill: "#338333",
                  outline: "none"
                },
                pressed: {
                  fill: "#006400",
                  outline: "none"
                }
              }}
            
              />)
        }
        
      </Geographies>
      {filter.map(({ name, coordinates, markerOffset ,index}) => (
           <Marker key={index} coordinates={coordinates}>
           <circle  r={1} fill="#F00" stroke="#F00" strokeWidth={1} />
           <text
             textAnchor="middle"
             y={markerOffset}
             style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
           >
             {name}
           </text>
         </Marker>
      ))}
    </ComposableMap>
    </div>
    
    </>
  );
};

export default memo(MapChart);