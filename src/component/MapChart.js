import React, { memo, useState,useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

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
  const animals=[{coordinates:[]}]
  const rhino = [
    { coordinates: [18.423300, -33.918861]},
    { coordinates: [18.4929993, -22.967062]},
    {  coordinates: [31.053028, -17.824858] },
    {  coordinates: [37.9083264, 0.1768696 ] },
  ];
  // longtitude/lattitude
  const elephant = [
    { coordinates: [77.216721, 28.644800    ]},
    { coordinates: [80.7718, 7.8731]},
    {  markerOffset: 26, name: "Asian Elephants",coordinates: [100.9925, 15.8700] },
    {  coordinates: [19.5687, 2.3185 ] },
    { markerOffset: 15, name: "African Elephants", coordinates: [18.423300, -33.918861 ] },
  ];
  const tiger = [
    { coordinates: [108.2772, 14.0583]},//vietnam
    { coordinates: [104.9910, 12.5657]},//cambodia
    {  coordinates: [78.9629, 20.5937] },//india
    {  coordinates: [90.4336, 27.5142 ] },//bhutan
    { coordinates: [100.9925, 15.8700 ] },//thailand
    { coordinates: [113.9213,0.7893 ] },//indonesia
    { coordinates: [102.4955, 19.8563 ] },//laos
    { coordinates: [104.1954, 35.8617] },//china
    { coordinates: [101.9758, 4.2105] },//malasyia
    { coordinates: [105.3188, 61.5240 ] },//russia
    { coordinates: [84.1240, 28.3949] },//nepal
    { coordinates: [95.9560, 21.9162] },//myanmar

  ];
  const gorilla = [
    { coordinates: [ 29.8739, 1.9403]},//rwanda
    { coordinates: [32.2903, 1.3733]},//uganda
    {  coordinates: [15.8277, 0.2280] },//republic of congo coordinates
    {  coordinates: [19.5687, 2.3185 ] },//central africa
    { coordinates: [2.4604, 13.5317 ] },//western africa
    { coordinates: [10.2679,1.6508 ] },//equatorial guinea
    { coordinates: [13.234444, -8.838333    ] },//angola 
    { coordinates: [12.3547, 7.3697] },//cameroon
    { coordinates: [20.9394, 6.6111] },//central african republic coordinates
    { coordinates: [11.6094, 0.8037] },//gabon
    { coordinates: [21.7587, 4.0383] },//democratic republic of congo coordinates

  ];
  const lemurs = [
    { coordinates: [ 46.8344597, -18.7792678 ]},//Madagascar
 

  ];
 
const MapChart = ( {setTooltipContent} ) => {
  const [locations,setLocations]=useState([])
  useEffect(() => {
    const fetchLocations=()=>{
      fetch('http://localhost:4000/locations')
      .then(resp=>resp.json())
      .then(data=>{
        data.map(locations=>{
                setLocations({ locations: locations })
  
        })
      })
    }
fetchLocations()
// console.log(locations)
  });

  return (
    <div className="Map">

    <ComposableMap data-tip="" projectionConfig={{ scale: 120 }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo =>
             <Geography
             stroke="white"
             strokeOpacity="0.02"
              key={geo.rsmKey}
              geography={geo}
              onMouseEnter={() => {
                const { NAME, POP_EST } = geo.properties;
                setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
              style={{
                default: {
                  fill: "#66a266",
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
      {tiger.map(({ name, coordinates, markerOffset }) => (
           <Marker key={name} coordinates={coordinates}>
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
  );
};

export default memo(MapChart);