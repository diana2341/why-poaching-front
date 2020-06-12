import React from 'react'
import '../MenuPop.css';
import { Link } from 'react-router-dom';


export default class menuPop extends React.Component{
    render(){
        return(
            <div class="cir-menu">
              <div class="thing"><p  class="m"><Link to="/map">Map</Link></p></div>

                <div class="thing"><p class="p"><Link to="/community">Community</Link></p></div>

                <div class="thing"><p class="po"><Link to="/map">Poachers</Link></p></div>

                <div class="thing"><p class="p"><Link to="/map">Resources</Link></p></div>
        
             </div>
        )
    }
}