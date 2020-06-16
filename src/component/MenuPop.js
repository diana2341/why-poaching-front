import React from 'react'
import '../MenuPop.css';
import {Howl, Howler} from 'howler';

import beepMp3 from '../audio/beep.mp3'
import { Link } from 'react-router-dom';


export default class menuPop extends React.Component{
    render(){
        const {Howl, Howler} = require('howler');
        const sound = new Howl({
            src: [beepMp3],
            volume: 0

          });
          // Howler.volume(0.7);
         

        return(
            <div className="cir-menu">
              <div className="thing" ><p className="m"><Link onMouseOver={()=>sound.play()} to="/map">Map</Link></p></div>

                <div className="thing"><p className="p"><Link onMouseOver={()=>sound.play()} to="/community">Community</Link></p></div>

                <div className="thing"><p className="po"><Link onMouseOver={()=>sound.play()} to="/poachers">Poachers</Link></p></div>

                <div className="thing"><p className="p"><Link onMouseOver={()=>sound.play()} to="/resources">Resources</Link></p></div>
        
             </div>
        )
    }
}