import React from 'react'
import MenuPop from './MenuPop'

export default class Resources extends React.Component{
    state={
        // tigerLink:[],
        // elephantLink:[],
        // gorillaLink:[],
        // lemurLink:[],
        // rhinoLink:[],
        // orangutanLink:[]\
        links:[]
    }
    componentDidMount(){
        fetch('http://localhost:4000/links')
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({links:data})
            // data.filter(link=>  link.animal_id===1).map(link=>{ {this.setState({tigerLink:link})}})
            // data.filter(link=>  link.animal_id===2).map(link=>{ {this.setState({elephantLink:link})}})
            // data.filter(link=>  link.animal_id===3).map(link=>{ {this.setState({gorillaLink:link})}})
            // data.filter(link=>  link.animal_id===4).map(link=>{ {this.setState({lemurLink:link})}})

            // data.filter(link=>  link.animal_id===5).map(link=>{ {this.setState({rhinoLink:link})}})
     
           })
    }
    render(){
        return(
            <>
                    <MenuPop/>

            <div className="l-bg"></div>
  
            <div className="linkss">
                <h1>Resources</h1>
            {this.state.links.map(link=>
            link.animal_id==1?
            <div className="tiger-link">
               <p >{link.website}</p> 
            </div>
            :
            link.animal_id==2?
            <div className="elephant-link">
               <p >{link.website}</p> 
            </div>
            :
            link.animal_id==3?
            <div className="gorilla-link">
               <p >{link.website}</p> 
            </div>
            :
            link.animal_id==4?
            <div className="lemur-link">
               <p >{link.website}</p> 
            </div>
            :
            link.animal_id==5?
            <div className="rhino-link">
               <p >{link.website}</p> 
            </div>
            :
            link.animal_id==6?
            <div className="orangutan-link">
               <p >{link.website}</p> 
            </div>:''
            
         
            
            )}
            </div>
            </>
        )
    }
}