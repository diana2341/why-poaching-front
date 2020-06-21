import React from 'react'
import '../MenuPop.css';

import { Link } from 'react-router-dom';


export default class menuPop extends React.Component{
    render(){
       

        return(
            <div className="cir-menu">
              <div className="thing" ><p className="m"><Link to="/map">Map</Link></p></div>

                <div className="thing"><p className="p"><Link  to="/community">Community</Link></p></div>

                <div className="thing"><p className="po"><Link  to="/poachers">Poachers</Link></p></div>

                <div className="thing"><p className="p-r"><Link  to="/sources">Sources</Link></p></div>
        
             </div>
        )
    }
}