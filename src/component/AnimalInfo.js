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

        return(
            <>
            
        <a id="s1" title="Section 1 Anchor" class="s"></a>
        <a id="s2" title="Section 2 Anchor" class="s"></a>
        <a id="s3" title="Section 3 Anchor" class="s"></a>
        <a id="s4" title="Section 4 Anchor" class="s"></a>
        <a id="s5" title="Section 5 Anchor" class="s"></a>
        <a id="s6" title="Section 6 Anchor" class="s"></a>
        <a id="s7" title="Section 7 Anchor" class="s"></a>

        <div id="progress"></div>
        <div id="background"></div>

        <nav class="prevnext" role="presentation">
        <ul>
            <li class="p2"><a href="#s1" accesskey="1" ></a></li>
            <li class="p3n1 starter"><a href="#s2" accesskey="2" ></a></li>
            <li class="p4n2"><a href="#s3" accesskey="3" ></a></li>
            <li class="p5n3"><a href="#s4" accesskey="4" ></a></li>
            <li class="p6n4"><a href="#s5" accesskey="5" ></a></li>
            <li class="p7n5"><a href="#s6 "accesskey="6" ></a></li>
            <li class="n6"><a href="#s7" accesskey="7" ></a></li>
        </ul>
        </nav>

        <nav class="thumbs" aria-label="table of contents">
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

                <h1> {this.state.animal.name}</h1>
                
            </section>
 
            <section>
            
                <h1>{this.state.animal.causes}</h1>
                
            </section>
 
            <section>

                <h1>{this.state.animal.help}</h1>
                
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

                <Graph routerProps={this.props.routerProps}/>
                
            </section>
 
            <section>
            
                <h1>Section 6</h1>
                
            </section>
            
        </main>
            </>
            
        )
    }
}