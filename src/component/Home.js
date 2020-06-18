import React from 'react'
import '../home.css';

export default class Home extends React.Component{
    render(){
        return(
            <>
            <img src="https://i.ya-webdesign.com/images/bird-gif-png-8.gif"/>
            <div className="home-bg"> 
            <div class="container-text">
                Endangered Lives
            </div>

            </div>
            <p onClick={()=>{this.props.routerProps.history.push(`/map`)}}className="explore"> Explore Map</p>
            <img onClick={()=>{this.props.routerProps.history.push(`/map`)}} className="world" src={require("../img/world.png")}/>

            </>
        )
    }
}