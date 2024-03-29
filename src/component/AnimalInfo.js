import React,{ useRef }  from 'react'
import '../AnimalInfo.css';
import Graph from './Graph'
import { Zoom } from 'react-slideshow-image';
import MenuPop from './MenuPop'

export default class AnimalInfo extends React.Component{

    state={
        animal:[],
        filter:[],
        img:[],
        organizations:[],
        news:[],
        play:false,
        slideContainer : React.createRef(),
        reveal : React.createRef(),
        eye : React.createRef(),
        sensitive : React.createRef(),
        speak : React.createRef(),
        mute : React.createRef()




    }
    componentDidMount(){
        fetch(`https://why-poaching-back.herokuapp.com/animals/${this.props.routerProps.match.params.id}`)
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({animal:data})
    })

    fetch(`https://why-poaching-back.herokuapp.com/statistics`)
        .then(resp=>resp.json())
        .then(data=>{
         data.filter(stat=>  parseInt(stat.animal_id)===parseInt(this.props.routerProps.match.params.id)).map(stat=>this.setState({filter:stat}))
    })
    
    fetch(`https://why-poaching-back.herokuapp.com/images`)
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({img:data})
    })

    fetch(`https://why-poaching-back.herokuapp.com/organizations`)
        .then(resp=>resp.json())
        .then(data=>{
            this.setState({organizations:data})
    })

    fetch(`https://newsapi.org/v2/everything?q=${this.props.routerProps.match.params.animal}+poaching&apiKey=d03a4c983eec491297a0525301ec3ec4`)
        .then(resp=>resp.json())
        .then(data=>
            this.setState({news:data.articles})
    )}

    reveal=(event)=>{
       if( event.target.className==="reveal")
       this.state.slideContainer.current.style.filter='none'
       this.state.reveal.current.style.display='none'
       this.state.eye.current.style.display='none'
       this.state.sensitive.current.style.display='none'
    }
    
    render(){
        var myTimeout;
        function myTimer() {
            window.speechSynthesis.pause();
            window.speechSynthesis.resume();  
            myTimeout = setTimeout(myTimer, 10000000);
        }
        window.speechSynthesis.cancel();
        myTimeout = setTimeout(myTimer, 10000000);
        let voices = window.speechSynthesis.getVoices();
        let toSpeak = this.state.animal.causes;
      

        let utt = new SpeechSynthesisUtterance(toSpeak);
        utt.onend =  ()=> { clearTimeout(myTimeout); }
  
       let speak=()=>{

        utt.voice = voices[2];
        utt.volume = 0.1
        utt.pitch = 0.8;
        window.speechSynthesis.cancel()? 
        window.speechSynthesis.resume()
        :
        window.speechSynthesis.speak(utt);
        this.state.speak.current.style.opacity="1"
        this.state.mute.current.style.opacity="0"
        this.state.mute.current.style.zIndex="-1"
        this.state.speak.current.style.opacity="1"
       }
        let pause=()=>{
           window.speechSynthesis.pause() 
            utt.onend =  ()=> { clearTimeout(myTimeout); }
            this.state.speak.current.style.opacity="0"
            this.state.mute.current.style.opacity="1"
            this.state.mute.current.style.zIndex="1"
        }

        const butterflies=['one-b',"two-b",'three-b','four-b']  
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

        return(
        <>
        <MenuPop/>  
        <a href="/"id="information" title="Section 1 Anchor" className="s"> </a>
        <a href="/"id="why" title="Section 2 Anchor" className="s"> </a>
        <a href="/"id="how-to-help" title="Section 3 Anchor" className="s"> </a>
        <a href="/"id="statistics" title="Section 4 Anchor" className="s"> </a>

        <a href="/"  id="s5" title="Section 5 Anchor" className="s"> </a>
        <div id="progress"></div>
        <div id="background"></div>
        <nav className="prevnext" role="presentation">
            <ul>
                <li  className="p2"><a href="#information"  > </a></li>
                <li className="p3n1 starter"><a href="#why"  > </a></li>
                <li className="p4n2"><a href="#how-to-help"  > </a></li>
                {this.props.routerProps.match.params.id==="4"? 
                null:
                <li  className="p5n3"><a href="#statistics"  > </a></li>}
            </ul>
        </nav>


        <main role="main">
            <section>
                <h1 className="animal-name"> {this.state.animal.name}</h1>
                {this.props.routerProps.match.params.id==="1"?
                <img className="facetiger"src={frontigert} alt="chart"/>
                :
                this.props.routerProps.match.params.id==="2"?
                <img className="elephant"src={elephantfront} alt="chart"/>  
                 :
                this.props.routerProps.match.params.id==="3"?
                <img className="gorilla"src={gorillafront} alt="chart"/> 
                :
                this.props.routerProps.match.params.id==="4"?
                <img className="lemur"src={lemurfront} alt="chart"/> 
                :
                this.props.routerProps.match.params.id==="5"?
                <img className="rhino"src={rhinofront} alt="chart"/> 
                :
                this.props.routerProps.match.params.id==="6"?
                <img className="face"src={front} alt="chart"/>  
                :null}
                <p className="basic-info">{basic.split('/').map((line,index) => <li key={index} className="line">{line}</li> )}</p>
            </section>
 
            <section className="causes">
                <div className="bg-c"></div>
                <h1>Why is the {this.state.animal.name} being poached? </h1><br/> 
                <img ref={this.state.speak}alt="" src={require("../img/on.png")}className="talk speak" onClick={pause}/>  
                <img ref={this.state.mute}alt="" src={require("../img/off.png")}className="talk mute" onClick={speak}/>
                <p className="p-i">{this.state.animal.causes}</p>
                <br/><br/><br/>
                <div ref={this.state.slideContainer}className="slide-container">

                    <Zoom {...zoomOutProperties}>
                     {this.state.img.filter(img=>parseInt(img.animal_id)===parseInt(this.props.routerProps.match.params.id)).map(img=> 
                    <img className="img" key={img.id} style={{width: "100%"}}src={img.image_url} alt=""/> )} 
                    </Zoom>
                  </div>
                <img ref={this.state.eye}className="eye"src={eye} alt=""/>
                <p ref={this.state.sensitive}className="sensitive">Sensitive Content</p>
                <button  ref={this.state.reveal}onClick={this.reveal}className="reveal"> See Photos</button>
            </section>
 
            <section className="help">
                {/* {console.log('myRef',this.state.myRef)} */}
                <h1 className="how t-t">How Can You Help {this.state.animal.name}s</h1><br/>
                {a.split('.').map((line,index) => <li key={index} className="line">{line}.</li> )}
                <div className="scroll">
                    <h1 className="t-t">Organizations Helping {this.state.animal.name}s</h1><br/>
                    {this.state.organizations.filter(organization=>parseInt(organization.animal_id)===parseInt(this.props.routerProps.match.params.id)).map((img,index)=> 
                    <div key={index}> <img className="logos" key={img.id} style={{width: "100%"}}src={img.logo} alt=""/><a href={img.website}><p>{img.name}</p> </a> </div>)} 
                </div>
                <iframe className="frame"src={this.state.animal.video_url}
                    frameBorder='0'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                /> 
            </section>
 
            <section className="help">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {this.props.routerProps.match.params.id==='6'? 
                <>
                <h1 className="stat-title">Statistical Information</h1>
                <img className="oc"src={orangutan} alt="chart"/>
                <p className="graph-info">Both Borneo and Sumatran orangutans populations have declined. A century ago their population was estimated at 230,000 orangutans in total. The Bornean orangutan population is now estimated to 104,700 and the Sumatran about 7,500 , this orangutan species is critically Endangered.There was another species of orangutan introduced in November, 2017. The Tapanuli orangutan that had a number of 800 individual apes and  is the most endangered of all great apes.</p> 
                <h1 className="stat-title">Statistical Information</h1>
                <h1 className="o-news">Recent News Related To {this.state.animal.name}'s</h1>
                <div className="news-border-orangutan">
                    <div className="news-grid">
                        {this.state.news.map((news,index)=>
                            <div key={index}className="news-box ">
                                <a href={news.url}>  <p className="text">{news.title}</p><br/>
                                <img className="news-img"src={news.urlToImage} alt=""/></a>
                            </div>        
                            )}  
                    </div>
                </div>
                </>
                :
                <>
                    <h1 className="stat-title">Statistical Information</h1>
                    <div className="news-border">
                    <h1 className="t-news">Recent News Related To {this.state.animal.name}'s</h1>
                        <div className="news-grid">
                            {this.state.news.map((news,index)=>
                            <div key={index}className="news-box">
                            <a href={news.url}>  <p className="text">{news.title}</p><br/>
                            <img className="news-img"src={news.urlToImage} alt={this.state.animal.name}/></a>
                            </div>
                            )}  
                        </div>
                    </div>
                    <p className="graph-info rest">{this.state.filter.info}</p>
                    <Graph routerProps={this.props.routerProps} state={this.state}/>
                </>
                }
              
            </section>    
        </main>
        {butterflies.map(function(name, index){
         return<div key={index}className={`container ${name}`}>
         <div className="butterfly-rotate">
           <div className="butterfly-box">
             <div className="butterfly">
               <div className="wing wing-left"></div>
               <div className="main"></div>
               <div className="wing wing-right"></div>
             </div>
           </div>    
         </div>
         </div>})}
        </>     
        )
    }
}