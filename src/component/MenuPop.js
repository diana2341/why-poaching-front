import React from 'react'
import '../MenuPop.css';

import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'

export default class menuPop extends React.Component{
    render(){
       

        return(
            <div className="cir-menu"> 
                <NavDropdown title={<i class="fas fa-bars"></i>} id="nav-dropdown">
                    <NavDropdown.Item href='/map'eventKey="4.1">Map</NavDropdown.Item>
                    <NavDropdown.Item href='/community'eventKey="4.2">Community</NavDropdown.Item>
                    <NavDropdown.Item href='poachers'eventKey="4.3">Poachers</NavDropdown.Item>
                    <NavDropdown.Item href='/sources'eventKey="4.3">Sources</NavDropdown.Item>
                </NavDropdown>
            </div>
        )
    }
}