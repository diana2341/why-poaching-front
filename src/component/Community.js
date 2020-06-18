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
         const{name,value,type}=event.target
         this.setState({[name]:value})

    }
    handleSubmit=(e)=>{
        e.preventDefault()
     const{username,animal,comment}=this.state
        fetch('http://localhost:4000/communities',{
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
        fetch('http://localhost:4000/communities')
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
                    <option >Select</option>
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
                            
                {post.map(comments=>{ 
                    return(

                 <>
     
                <div className="sec-c">
                    <div className="sec-pic">
                        {
                            comments.animal==="elephant"?
                            
                     <img className="comment-avatar"src="https://i.pinimg.com/736x/1a/a9/b3/1aa9b35901178e0dd69d14369a6dad7d.jpg" width="75" alt="Profile Avatar" title="Anie Silverston" />
                    :
                    comments.animal==="orangutan"?
                    

                    <img className="comment-avatar"src="https://www.pennlive.com/resizer/W6p-lWQjj5pGe6uHbtqUSH1jrps=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/VP6I3GOB4ZCTBNUNPYIJCGTTME.jpg" width="75" alt="Profile Avatar" title="Anie Silverston" />
                    :
                    comments.animal==="tiger"?
                    

                    <img className="comment-avatar"src="https://wp.nathabblog.com/wp-content/uploads/2011/03/19-baby-tiger.jpg" width="75" alt="Profile Avatar" title="Anie Silverston" />
                    :
                    comments.animal==="rhino"?
                    

                    <img className="comment-avatar"src="https://i.pinimg.com/originals/06/8e/23/068e23e76fa4a8309fe9f8ddad7c62e4.jpg" width="75" alt="Profile Avatar" title="Anie Silverston" />
                    :
                    comments.animal==="lemur"?

                    <img className="comment-avatar"src="https://cdn.24.co.za/files/Cms/General/d/6949/fd1bf216449b4ab6992cc2901e952f68.jpg" width="75" alt="Profile Avatar" title="Anie Silverston" />
                    :
                    comments.animal==="gorilla"?

                <img className="comment-avatar"src="https://i.pinimg.com/originals/ee/e5/74/eee574c3ebca283a2f676624dd2c03cb.jpg" width="75" alt="Profile Avatar" title="Anie Silverston" />
                :''
                
                        }
                        <p className="username-c"><strong>User: </strong>{comments.username}</p> 
                        <p className="topic"><strong>Topic: </strong>{comments.animal}</p>
                        </div>
                        </div>
                       <div className="co-b">
                        <p className="comment">{comments.comment}</p><br/>
                        </div>
                    <p className="posted-time"><strong>Posted:</strong> {moment(comments.created_at).format('LLL')}</p>
                        <hr/>
                      </>

                ) })}
                  </div>
                     </div>
                     </div>
                     </>

            
        )
    }
}