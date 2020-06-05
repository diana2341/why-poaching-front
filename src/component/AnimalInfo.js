import React from 'react'
import '../AnimalInfo.css';
import Graph from './Graph'



export default class AnimalInfo extends React.Component{
    state={
        animal:[]
    }
    componentDidMount(){
        fetch(`http://localhost:4000/animals/${this.props.routerProps.match.params.id}`)
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({animal:data})
        })

    }

    render(){

        const handleClick=()=>{
            this.setState(prevState=>({
                // class:prevState.class+1
            }))
        }
        return(
            
            <span>
            <ul>
               <li className="1"><a href="#about">about</a></li> 
               <li className="2"><a href="#why">why?</a></li> 
               <li className="3"><a href="#help">help</a></li> 
               <li className="4"><a href="#watch">watch</a></li> 
               <li className="5"><a href="#purple">purple</a></li> 

            </ul>
            <div id="container">
                <div id="about"><h1>{this.state.animal.name}</h1></div>
                <div id="why"><h1>{this.state.animal.causes}</h1></div>
                <div id="help"><h1>{this.state.animal.help}</h1></div>
                <div id="watch">
                <iframe src={this.state.animal.video_url}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
                 </div>
                <div id="purple">
                    <Graph/>
                </div>

            </div>
            <button onClick={handleClick}className="btn" >Click me to scroll vertically!</button>

            </span>
            
        )
    }
}