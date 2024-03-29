import React from 'react'
import '../home.css';

export default class Home extends React.Component{
    render(){
      
        return(
            <>
                <div className="mobile">
                    <h5 className="mobile-title">
                        <span className="titl" >Get the full Endangered Lives experience </span><span className="titl">on your laptop!</span>
                    </h5>
                    <img className='com'alt=''src={require("../img/mobile.png")}/>
                </div>
                <img className='bird'alt=''src={require("../img/birdsgif.gif")}/>
                <div className="home-bg"></div> 
                <div className='box-text-c'>
                    <div className="container-text">
                        Endangered Lives
                    </div>          
                    <p onClick={()=>{this.props.routerProps.history.push(`/map`)}}className="explore"> Explore Map</p>
                    <img alt=''onClick={()=>{this.props.routerProps.history.push(`/map`)}} className="world" src={require("../img/world.png")}/>
                </div>
            </>
        )
    }
}