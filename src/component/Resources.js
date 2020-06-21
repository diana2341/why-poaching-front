import React from 'react'
import MenuPop from './MenuPop'

export default class Resources extends React.Component{
    state={
    
        links:[]
    }
    componentDidMount(){
        fetch('https://why-poaching-back.herokuapp.com/links')
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({links:data})

     
           })
    }
    render(){
      const butterflies=['one-b',"two-b",'three-b','four-b']

        const name=["Gorilla","Lemur","Elephant","Rhino","Orangutan","Tiger"]
        return(
            <>
                    {butterflies.map(function(name, index){
         return    <div key={index}className={`container ${name} butter`}>
         <div className="butterfly-rotate">
           <div className="butterfly-box">
             <div className="butterfly">
               <div className="wing wing-left"></div>
               <div className="main"></div>
               <div className="wing wing-right"></div>
             </div>
           </div>    
         </div>
         </div>
                        
                      })}
                    <MenuPop/>

            <div className="l-bg"></div>
            
            <div className="linkss">
                        {name.map((name,index)=><h1 key={index}className={`${name}-l`}>{name} information</h1>)}

                <h1 className="r-title">Sources</h1>
            {this.state.links.map((link,index)=>
            link.animal_id==='1'?
            <div key={index}className="tiger-link">
               <a href={link.website}><p >{link.website}</p></a> 
            </div>
            :
            link.animal_id==='2'?
            <div key={index} className="elephant-link">
               <a href={link.website}><p >{link.website}</p></a> 
            </div>
            :
            link.animal_id==='3'?
            <div key={index} className="gorilla-link">
               <a href={link.website}><p >{link.website}</p></a> 
            </div>
            :
            link.animal_id==='4'?
            <div key={index}className="lemur-link">
               <a href={link.website}><p >{link.website}</p></a> 
            </div>
            :
            link.animal_id==='5'?
            <div key={index}className="rhino-link">
               <a href={link.website}><p >{link.website}</p></a> 
            </div>
            :
            link.animal_id==='6'?
            <div key={index}className="orangutan-link">
               <a href={link.website}><p >{link.website}</p></a> 
            </div>:''
            
         
            
            )}
     
            </div>
            </>
        )
    }
}