import React from 'react'
import MenuPop from './MenuPop'
import  moment from 'moment'


export default class Community extends React.Component{
    state={
        animal:'',
        username:'',
        comment:'',
        posts:[],
        sort:''
    }

     handleChange=(event)=>{
         const{name,value}=event.target
         this.setState({[name]:value})

    }
    handleSubmit=(e)=>{
    e.preventDefault()
    const{username,animal,comment}=this.state
    fetch('https://why-poaching-back.herokuapp.com/communities',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },

        body: JSON.stringify({
            username,
            animal,
            comment
            }) 
        })
        .then(this.setState({
            animal:'',
            username:'',
            comment:'',
        }))
        .then(this.fetchComments)
    }
    fetchComments=()=>{
        fetch('https://why-poaching-back.herokuapp.com/communities')
        .then(resp=>resp.json())
        .then(data=>this.setState({posts:data}))
    }
    componentDidMount(){
        this.fetchComments()
    }
     
    

    render(){  
    let post=this.state.posts
       if(this.state.sort==="gorillas")
       post= post.filter(posts =>posts.animal==="gorilla")
       if(this.state.sort==="tigers")
       post= post.filter(posts =>posts.animal==="tiger")
       if(this.state.sort==="rhinos")
       post= post.filter(posts =>posts.animal==="rhino")
       if(this.state.sort==="lemurs")
       post= post.filter(posts =>posts.animal==="lemur")
       if(this.state.sort==="orangutans")
       post= post.filter(posts =>posts.animal==="orangutan")
       if(this.state.sort==="elephants")
       post= post.filter(posts =>posts.animal==="elephant")
       if(this.state.sort==="newest")
       post= post.sort((a, b) => b.created_at.localeCompare(a.created_at))
       if(this.state.sort==="oldest")
       post= post.sort((a, b) => a.created_at.localeCompare(b.created_at))

      
        return(
            <>
            <MenuPop/>
            <div id="container-b">
                <img id="bird" src="https://media.giphy.com/media/3o7TKTEnDK22YfSWwo/giphy.gif" alt=""/>
                <img id="bird2" src="https://media.giphy.com/media/3o7TKTEnDK22YfSWwo/giphy.gif" alt=""/>
            </div>
            <div id="bg"></div>
            <h1 className="community">Community</h1>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <label>   Choose Topic:</label><br/>
                    <select required name="animal"value={this.state.animal} onChange={this.handleChange}>
                        <option value="">Select</option>
                        <option value="gorilla">Gorilla</option>
                        <option value="tiger">Tiger</option>
                        <option value="lemur">Lemur</option>
                        <option value="rhino">Rhino</option>
                        <option value="orangutan">Orangutan</option>
                        <option value="elephant">Elephant</option>
                    </select><br/><br/>                   
                    <label>Username:</label><br/>
                    <input required value={this.state.username} onChange={this.handleChange}type="text" name="username" /><br/><br/>          
                    <label> Comment:</label><br/>
                    <input required value={this.state.comment} onChange={this.handleChange}type="text" name="comment" /><br/><br/>
                    <button className="s-btn">Submit</button>
                </form>

                <form className="select">
                    <select name="sort" value={this.state.sort} onChange={this.handleChange}>
                        <option >Sort by</option>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="gorillas">Gorilla</option>
                        <option value="tigers">Tiger</option>
                        <option value="lemurs">Lemur</option>
                        <option value="rhinos">Rhino</option>
                        <option value="orangutans">Orangutan</option>
                        <option value="elephants">Elephant</option>
                    </select><br/><br/>
                </form>
            </div>

            <div className="box">
                <div className="comment-sec">
                    <div className="comment-box">                   
                    {post.map((comments,index)=>{ 
                        return(
                        <div key={index}>    
                            <div className="sec-c">
                                <div className="sec-pic">
                                {
                                    comments.animal==="elephant"?
                                            
                                    <img className="comment-avatar"src={require("../img/elephant.jpg")} width="75" alt="Profile Avatar" title="Anie Silverston" />
                                    :
                                    comments.animal==="orangutan"?
                                    

                                    <img className="comment-avatar"src={require("../img/monkey.jpg")} width="75" alt="Profile Avatar" title="Anie Silverston" />
                                    :
                                    comments.animal==="tiger"?
                                    

                                    <img className="comment-avatar"src={require("../img/tiger-baby.jpg")} width="75" alt="Profile Avatar" title="Anie Silverston" />
                                    :
                                    comments.animal==="rhino"?
                                    

                                    <img className="comment-avatar"src={require("../img/rhino-baby.jpg")} width="75" alt="Profile Avatar" title="Anie Silverston" />
                                    :
                                    comments.animal==="lemur"?

                                    <img className="comment-avatar"src={require("../img/lem.jpeg")}width="75" alt="Profile Avatar" title="Anie Silverston" />
                                    :
                                    comments.animal==="gorilla"?

                                    <img className="comment-avatar" src={require("../img/gor.jpg")}width="75" alt="Profile Avatar" title="Anie Silverston" />
                                :''}
                                    <p className="username-c"><strong>User: </strong>{comments.username}</p> 
                                    <p className="topic"><strong>Topic: </strong>{comments.animal}</p>
                                </div>
                            </div>

                            <div className="co-b">
                                <p className="comment">{comments.comment}</p><br/>
                            </div>
                            <p className="posted-time"><strong>Posted:</strong> {moment(comments.created_at).format('LLL')}</p>
                            <hr/>
                        </div>) })}
                    </div>
                </div>
            </div>
                     </>

            
        )
    }
}