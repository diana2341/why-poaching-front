import React from 'react'
import MenuPop from './MenuPop'

export default class Poachers extends React.Component{
    state={
        poachers:[]
    }
    componentDidMount(){
        fetch('https://why-poaching-back.herokuapp.com/poachers')
        .then(resp=>resp.json())
        .then(data=>this.setState({poachers:data}))
    }
    render(){
        return(
            <>
             <MenuPop/>
            <div className="p-b"></div>
              <img className="fly"src='https://www.thelazyolive.com/img/dragonfly5.gif' alt=""/> 
              <img className="fly2"src='https://www.thelazyolive.com/img/dragonfly5.gif' alt=""/> 



            <div className="poachers">
                <div className="poach-div">
                <h1 className="why-p">Why Are People Poaching Animals?</h1>

            {this.state.poachers.map(info=>
            <div className="">
            <img className="poach-pic one"src={info.img} alt=""/><br/>
            {/* <img className="poach-pic two"src={info.img2} alt=""/> */}
            <iframe className="iframe poach"src={"https://www.youtube.com/embed/_nJ5xLvyaJ8"}//fixxxxxx
                 frameBorder='0'
                 allow='autoplay; encrypted-media'
                 allowFullScreen
                 title='video'
                /> 
              <p className="poach-why">{info.why}</p>  
              </div>
                )}
            </div>
            </div>
            
            </>
        )
    }
}