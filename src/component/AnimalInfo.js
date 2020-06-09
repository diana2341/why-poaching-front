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
      img:[]

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
        //  data.map(img=>  img.animal_id==this.props.routerProps.match.params.id?this.setState({img:img}):console.log(img.animal_id===this.props.routerProps.match.params.id))
      

  
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

        return(
            <>
            
        <a id="s1" title="Section 1 Anchor" className="s"></a>
        <a id="s2" title="Section 2 Anchor" className="s"></a>
        <a id="s3" title="Section 3 Anchor" className="s"></a>
        <a id="s4" title="Section 4 Anchor" className="s"></a>
        <a id="s5" title="Section 5 Anchor" className="s"></a>
        <a id="s6" title="Section 6 Anchor" className="s"></a>
        <a id="s7" title="Section 7 Anchor" className="s"></a>

        <div id="progress"></div>
        <div id="background"></div>

        <nav className="prevnext" role="presentation">
        <ul>
            <li className="p2"><a href="#s1" accessKey="1" ></a></li>
            <li className="p3n1 starter"><a href="#s2" accessKey="2" ></a></li>
            <li className="p4n2"><a href="#s3" accessKey="3" ></a></li>
            <li  className="p5n3"><a href="#s4" accessKey="4" ></a></li>
            <li onClick={statFilter} className="p6n4"><a href="#s5" accessKey="5" ></a></li>
            <li className="p7n5"><a href="#s6 "accessKey="6" ></a></li>
            <li className="n6"><a href="#s7" accessKey="7" ></a></li>
        </ul>
        </nav>

        <nav className="thumbs" aria-label="table of contents">
        <ul>
            <li><a href="#s1" ></a></li>
            <li><a href="#s2"></a></li>
            <li><a href="#s3" ></a></li>
            <li><a href="#s4"></a></li>
            <li><a href="#s5" ></a></li>
            <li><a href="#s6" ></a></li>
            <li><a href="#s7"></a></li>
        </ul>
        </nav>

        <main role="main">
 
            <section>

                <h1 className="animal-name"> {this.state.animal.name}</h1>
                
            </section>
 
            <section className="causes">
    
        <h1>Why is the {this.state.animal.name} being poached? </h1><br/>
                <p>{this.state.animal.causes}</p>
                
         
           
           <div className="slide-container">
        <Zoom {...zoomOutProperties}>
       {this.state.img.filter(img=>img.animal_id==this.props.routerProps.match.params.id).map(img=> 
        <img className="img" key={img.id} style={{width: "100%"}}src={img.image_url} alt=""/> )} 
        </Zoom>
      </div>

            </section>
 
            <section className="help">
                <h1>How can you help {this.state.animal.name}'s</h1>
                <p>{this.state.animal.help}</p>
                
            </section>
 
            <section>
                <iframe src={this.state.animal.video_url}
                 frameBorder='0'
                 allow='autoplay; encrypted-media'
                 allowFullScreen
                 title='video'
                />     
            </section>
 
            <section>
            {this.props.routerProps.match.params.id==6? 
                <img src={orangutan} alt="chart"/> 

                            :
                this.props.routerProps.match.params.id==4?
                null:
                 <Graph routerProps={this.props.routerProps} state={this.state}/>

            }
                
                
            </section>
 
            <section>
            
                <h1>Section 6</h1>
                
            </section>
            
        </main>
            </>
            
        )
    }
}