import React from 'react'
import '../AnimalInfo.css';
import Graph from './Graph'
import { Zoom } from 'react-slideshow-image';





export default class AnimalInfo extends React.Component{
    state={
        animal:[],

      tiger:[],
      elephants:[],
      rhinos:[],
      gorillas:[],
      filter:[],
      img:[],
      organizations:[]

    }
    componentDidMount(){
        fetch(`http://localhost:4000/animals/${this.props.routerProps.match.params.id}`)
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({animal:data})
        })
        fetch(`http://localhost:4000/statistics`)
        .then(resp=>resp.json())
        .then(data=>{
         data.filter(stat=>  stat.animal_id===1).map(stat=>{ {this.setState({tiger:stat})}})
         data.filter(stat=>  stat.animal_id===2).map(stat=>{ {this.setState({elephants:stat})}})
         data.filter(stat=>  stat.animal_id===3).map(stat=>{ {this.setState({gorillas:stat})}})
         data.filter(stat=>  stat.animal_id===5).map(stat=>{ {this.setState({rhinos:stat})}})
  
        })
         fetch(`http://localhost:4000/images`)
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({img:data})
      

  
        })
        fetch(`http://localhost:4000/organizations`)
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({organizations:data})
      

  
        })
    }
    

    render(){

        
        const zoomOutProperties = {
            // duration: 5000,
            // transitionDuration: 500,
            // infinite: true,
            // indicators: true,
            // scale: 0.4,
            arrows: true,
            autoplay:false
          }
                  
        const statFilter=()=>{
         
            console.log("works",this.state.filter)
            if(this.props.routerProps.match.params.id==1){
             this.setState({filter:this.state.tiger})
             console.log("tigers")
     
         }
        
           if(this.props.routerProps.match.params.id==2){
              this.setState({filter:this.state.elephants})
              console.log("elephants")
     
          }
          if(this.props.routerProps.match.params.id==3){
            this.setState({filter:this.state.gorillas})
            console.log("gorillas")
     
        }
        if(this.props.routerProps.match.params.id==5){
          this.setState({filter:this.state.rhinos})
          console.log("rhinos")
     
      }
          } 
        let orangutan=require("../img/orangutan2.png")
        let front=require("../img/face3.png")
        let frontigert=require("../img/tigs2.png")
        let elephantfront=require("../img/elephant.png")
        let rhinofront=require("../img/rhino.png")
        let gorillafront=require("../img/gorilla.png")
        let lemurfront=require("../img/lemur.png")



let a=this.state.animal.help+ ''
let basic=this.state.animal.basic_info+''

        return(
            <>
            
        <a id="s1" title="Section 1 Anchor" className="s"></a>
        <a id="s2" title="Section 2 Anchor" className="s"></a>
        <a id="s3" title="Section 3 Anchor" className="s"></a>
        <a id="s4" title="Section 4 Anchor" className="s"></a>
        <a id="s5" title="Section 5 Anchor" className="s"></a>
        {/* <a id="s6" title="Section 6 Anchor" className="s"></a>
        <a id="s7" title="Section 7 Anchor" className="s"></a> */}

        <div id="progress"></div>
        <div id="background"></div>

        <nav className="prevnext" role="presentation">
        <ul>
            <li  className="p2"><a href="#s1" accessKey="1" ></a></li>
            <li className="p3n1 starter"><a href="#s2" accessKey="2" ></a></li>
            <li className="p4n2"><a href="#s3" accessKey="3" ></a></li>
            <li onClick={statFilter} className="p5n3"><a href="#s4" accessKey="4" ></a></li>
            <li  className="p6n4" onClick={()=>{this.props.routerProps.history.push(`/map`)}}><a href="#s5" accessKey="5" ></a></li>
            {/* <li className="p7n5"><a href="#s6 "accessKey="6" ></a></li>
            <li className="n6"><a href="#s7" accessKey="7" ></a></li> */}
        </ul>
        </nav>

      

        <main role="main">
 
            <section>

                <h1 className="animal-name"> {this.state.animal.name}</h1>

                {this.props.routerProps.match.params.id==1?
                  <img className="facetiger"src={frontigert} alt="chart"/>
                  :
                  this.props.routerProps.match.params.id==2?
                 <img className="elephant"src={elephantfront} alt="chart"/>  
                 :
                 this.props.routerProps.match.params.id==3?
                 <img className="gorilla"src={gorillafront} alt="chart"/> 
                 :
                 this.props.routerProps.match.params.id==4?
                <img className="lemur"src={lemurfront} alt="chart"/> 
                :
                this.props.routerProps.match.params.id==5?
                <img className="rhino"src={rhinofront} alt="chart"/> 
                :
                this.props.routerProps.match.params.id==6?
                <img className="face"src={front} alt="chart"/>  
                :null
            
            }
                            <p className="basic-info">{basic.split('/').map(line => <li className="line">{line}</li> )}</p>






                
            </section>
 
            <section className="causes">
    
        <h1>Why is the {this.state.animal.name} being poached? </h1><br/>
                <p>{this.state.animal.causes}</p>
                
         
         
            <br/>  <br/>  <br/>
           <div className="slide-container">
        <Zoom {...zoomOutProperties}>
       {this.state.img.filter(img=>img.animal_id==this.props.routerProps.match.params.id).map(img=> 
        <img className="img" key={img.id} style={{width: "100%"}}src={img.image_url} alt=""/> )} 
        </Zoom>
      </div>

            </section>
 
            <section className="help">
                <h1 className="how">How can you help {this.state.animal.name}'s</h1><br/>
       {a.split('.').map(line => <li className="line">{line}.</li> )}
       <div className="scroll">
       <h1>organizations helping {this.state.animal.name}'s</h1><br/>
       {this.state.organizations.filter(organization=>organization.animal_id==this.props.routerProps.match.params.id).map(img=> 
      <> <img className="logos" key={img.id} style={{width: "100%"}}src={img.logo} alt=""/><a href={img.website}><p>{img.name}</p> </a> </>)} 

        </div>
                
            </section>
 
            <section>
                {this.props.routerProps.match.params.id==6? 
                <>
                  <h1 className="stat-title">statistical information</h1>

                    <img className="oc"src={orangutan} alt="chart"/>
                    <p className="graph-info">Both Borneo and Sumatran orangutans populations have declined. A century ago their population was estimated at 230,000 orangutans in total. The Bornean orangutan population is now estimated to 104,700 and the Sumatran about 7,500 , this orangutan species is critically Endangered.There was another species of orangutan introduced in November, 2017. The Tapanuli orangutan that had a number of 800 individual apes and  is the most endangered of all great apes.</p> 
                </>
                                :
                    this.props.routerProps.match.params.id==4?
                    null:
                    <>
                 <h1 className="stat-title">statistical information</h1>

                <p className="graph-info">{this.state.filter.info}</p>
                    <Graph routerProps={this.props.routerProps} state={this.state}/>
                    </>
                }
                  <iframe src={this.state.animal.video_url}
                 frameBorder='0'
                 allow='autoplay; encrypted-media'
                 allowFullScreen
                 title='video'
                /> 
            </section>
 
            {/* <section> */}
               {/* <iframe src={this.state.animal.video_url}
                 frameBorder='0'
                 allow='autoplay; encrypted-media'
                 allowFullScreen
                 title='video'
                />    */}
         
                
            {/* </section> */}
 
            {/* <section>
            
                <h1>Section 6</h1>
           
            </section> */}
            
        </main>
            </>
            
        )
    }
}