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
        const name=["Gorilla","Lemur","Elephant","Rhino","Orangutan","Tiger"]
        return(
            <>
                    <MenuPop/>

            <div className="l-bg"></div>
            
            <div className="linkss">
                        {name.map((name,index)=><h1 key={index}className={`${name}-l`}>{name} information</h1>)}

                <h1 className="r-title">Resources</h1>
            {this.state.links.map(link=>
            link.animal_id==1?
            <div className="tiger-link">
               <a href={link.website}><p >{link.website}</p></a> 
            </div>
            :
            link.animal_id==2?
            <div className="elephant-link">
               <a href={link.website}><p >{link.website}</p></a> 
            </div>
            :
            link.animal_id==3?
            <div className="gorilla-link">
               <a href={link.website}><p >{link.website}</p></a> 
            </div>
            :
            link.animal_id==4?
            <div className="lemur-link">
               <a href={link.website}><p >{link.website}</p></a> 
            </div>
            :
            link.animal_id==5?
            <div className="rhino-link">
               <a href={link.website}><p >{link.website}</p></a> 
            </div>
            :
            link.animal_id==6?
            <div className="orangutan-link">
               <a href={link.website}><p >{link.website}</p></a> 
            </div>:''
            
         
            
            )}
            </div>
            </>
        )
    }
}