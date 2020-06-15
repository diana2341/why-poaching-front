import React from 'react'
import '../AnimalInfo.css';
import Graph from './Graph'
import { Zoom } from 'react-slideshow-image';
import MenuPop from './MenuPop'
import {Howl, Howler} from 'howler';

import beepMp3 from '../audio/beep.mp3'
import Speech from 'react-speech';






export default class AnimalInfo extends React.Component{
    state={
        animal:[],
      filter:[],
      img:[],
      organizations:[],
      news:[]

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
         data.filter(stat=>  stat.animal_id==this.props.routerProps.match.params.id).map(stat=>{ {this.setState({filter:stat})}})
  
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
        fetch(`https://newsapi.org/v2/everything?q=${this.props.routerProps.match.params.animal}+poaching&apiKey=d03a4c983eec491297a0525301ec3ec4`)
        .then(resp=>resp.json())
        .then(data=>
            this.setState({news:data.articles})
    )

    }
    reveal=(event)=>{
       if( event.target.className==="reveal")
        document.getElementsByClassName("slide-container")[0].style.filter='none'
        document.getElementsByClassName("reveal")[0].style.display='none'
        document.getElementsByClassName("eye")[0].style.display='none'
        document.getElementsByClassName("sensitive")[0].style.display='none'


    }
    

    render(){
        const butterflies=['one-b',"two-b",'three-b','four-b']
        const {Howl, Howler} = require('howler');
        const sound = new Howl({
            src: [beepMp3],
            volume: 0.10

          });
        //   Howler.volume(0.5);

        
        const zoomOutProperties = {
            arrows: true,
            autoplay:false
          }
                  
        
        let orangutan=require("../img/orangutan2.png")
        let front=require("../img/face3.png")
        let frontigert=require("../img/tigs2.png")
        let elephantfront=require("../img/elephant.png")
        let rhinofront=require("../img/rhino.png")
        let gorillafront=require("../img/gorilla.png")
        let lemurfront=require("../img/lemur.png")
        let eye=require("../img/eye.png")




let a=this.state.animal.help+ ''
let basic=this.state.animal.basic_info+''
const style = {
    play: {
      button: {
        width: '28',
        height: '28',
        cursor: 'pointer',
        pointerEvents: 'none',
        outline: 'none',
        backgroundColor: 'yellow',
        border: 'solid 1px rgba(255,255,255,1)',
        borderRadius: 6
      },
    }
  };
        return(
            <>
         <MenuPop/>  
        <a id="information" title="Section 1 Anchor" className="s"></a>
        <a id="why" title="Section 2 Anchor" className="s"></a>
        <a id="how-to-help" title="Section 3 Anchor" className="s"></a>
        <a id="statistics" title="Section 4 Anchor" className="s"></a>

        <a id="s5" title="Section 5 Anchor" className="s"></a>
        {/* <a id="s6" title="Section 6 Anchor" className="s"></a>
        <a id="s7" title="Section 7 Anchor" className="s"></a> */}

        <div id="progress"></div>
        <div id="background"></div>

        <nav className="prevnext" role="presentation">
        <ul onMouseOver={()=>sound.play()} >
            <li  className="p2"><a href="#information" accessKey="1" ></a></li>
            <li className="p3n1 starter"><a href="#why" accessKey="2" ></a></li>
            <li className="p4n2"><a href="#how-to-help" accessKey="3" ></a></li>
            {this.props.routerProps.match.params.id==4? 
            null:
            <li  className="p5n3"><a href="#statistics" accessKey="4" ></a></li>}
            {/* <li  className="p6n4" onClick={()=>{this.props.routerProps.history.push(`/map`)}}><a href="#s5" accessKey="5" ></a></li> */}
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
                <div className="bg-c"></div>
    
        <h1>Why is the {this.state.animal.name} being poached? </h1><br/>
        <Speech 
 pause={true} 
 resume={true} 
 volume="0.1"

  text={this.state.animal.causes}
  voice="Google UK English Male" />
                <p className="p-i">{this.state.animal.causes}</p>
                
         
         
            <br/>  <br/>  <br/>
           <div className="slide-container">
        <Zoom {...zoomOutProperties}>
       {this.state.img.filter(img=>img.animal_id==this.props.routerProps.match.params.id).map(img=> 
        <img className="img" key={img.id} style={{width: "100%"}}src={img.image_url} alt=""/> )} 
        </Zoom>
     
      </div>
      <img className="eye"src={eye} alt=""/>
      <p className="sensitive">Sensitive Content</p>
   <button onMouseOver={()=>sound.play()}  onClick={this.reveal}className="reveal"> See Photos</button>
            </section>
 
            <section className="help">
                <h1 className="how t-t">How can you help {this.state.animal.name}'s</h1><br/>
       {a.split('.').map(line => <li className="line">{line}.</li> )}
       <div className="scroll">
       <h1 className="t-t">organizations helping {this.state.animal.name}'s</h1><br/>
       {this.state.organizations.filter(organization=>organization.animal_id==this.props.routerProps.match.params.id).map(img=> 
      <> <img className="logos" key={img.id} style={{width: "100%"}}src={img.logo} alt=""/><a href={img.website}><p>{img.name}</p> </a> </>)} 
  
        </div>
        <iframe className="frame"src={this.state.animal.video_url}
                 frameBorder='0'
                 allow='autoplay; encrypted-media'
                 allowFullScreen
                 title='video'
                /> 
        {this.props.routerProps.match.params.id==4? 
        <>
               <div className="news-border-2">
               <h1 className="t-t">Recent News related to {this.state.animal.name}'s</h1>
               <div className="news-grid">
                   {this.state.news.map(news=>
               <div className="news-box">
                   <a href={news.url}>  <p className="text">{news.title}</p><br/>
                    <img className="news-img"src={news.urlToImage} alt=""/></a>
               </div>
               
              
               
               )}  
               </div>
             </div>
             </>
             :''}

            </section>
 
            <section className="help">
            <span></span>
        <span></span>
        <span></span>
        <span></span>
                {this.props.routerProps.match.params.id==6? 
                <>
                  <h1 className="stat-title">statistical information</h1>

                    <img className="oc"src={orangutan} alt="chart"/>
                    <p className="graph-info">Both Borneo and Sumatran orangutans populations have declined. A century ago their population was estimated at 230,000 orangutans in total. The Bornean orangutan population is now estimated to 104,700 and the Sumatran about 7,500 , this orangutan species is critically Endangered.There was another species of orangutan introduced in November, 2017. The Tapanuli orangutan that had a number of 800 individual apes and  is the most endangered of all great apes.</p> 
                    <h1 className="stat-title">statistical information</h1>
                    <h1 className="o-news">Recent News related to {this.state.animal.name}'s</h1>

                 <div className="news-border-orangutan">

                 <div className="news-grid">
                     {this.state.news.map(news=>
                 <div className="news-box ">
                     <a href={news.url}>  <p className="text">{news.title}</p><br/>
                      <img className="news-img"src={news.urlToImage} alt=""/></a>
                 </div>
                 
                
                 
                 )}  
                 </div>
               </div>
                </>
                                :
                    // this.props.routerProps.match.params.id==4?
                    // "":
                    <>
                 <h1 className="stat-title">statistical information</h1>
                 <div className="news-border">
                     <h1 className="t-news">Recent News related to {this.state.animal.name}'s</h1>
                 <div className="news-grid">
                     {this.state.news.map(news=>
                 <div className="news-box">
                     <a href={news.url}>  <p className="text">{news.title}</p><br/>
                      <img className="news-img"src={news.urlToImage} alt=""/></a>
                 </div>
                 
                
                 
                 )}  
                 </div>
               </div>

                <p className="graph-info rest">{this.state.filter.info}</p>
                    <Graph routerProps={this.props.routerProps} state={this.state}/>
                    </>
                }
                  {/* <iframe className="frame"src={this.state.animal.video_url}
                 frameBorder='0'
                 allow='autoplay; encrypted-media'
                 allowFullScreen
                 title='video'
                />  */}
                <h1></h1>
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
        {butterflies.map(function(name, index){
         return    <div class={`container ${name}`}>
         <div class="butterfly-rotate">
           <div class="butterfly-box">
             <div class="butterfly">
               <div class="wing wing-left"></div>
               <div class="main"></div>
               <div class="wing wing-right"></div>
             </div>
           </div>    
         </div>
         </div>
                        
                      })}
     
            </>
            
        )
    }
}