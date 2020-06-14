import React from 'react'
import MenuPop from './MenuPop'

export default class Poachers extends React.Component{
    state={
        poachers:[]
    }
    componentDidMount(){
        fetch('http://localhost:4000/poachers')
        .then(resp=>resp.json())
        .then(data=>this.setState({poachers:data}))
    }
    render(){
        return(
            <>
             <MenuPop/>
            <div className="p-b">
                   

            <div className="poachers">
                <h1 className="why-p">Why are people poaching animals?</h1>

            {this.state.poachers.map(info=>
            <div className="">
            <img className="poach-pic one"src={info.img} alt=""/><br/>
            {/* <img className="poach-pic two"src={info.img2} alt=""/> */}
            <iframe className="iframe"src={"https://www.youtube.com/embed/_nJ5xLvyaJ8"}//fixxxxxx
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