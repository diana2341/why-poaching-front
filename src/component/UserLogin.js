import React from 'react'


export default class UserLogin extends React.Component{

    state={
        username:'',
    }

     handleChange=(event)=>{
         const{name,value,type}=event.target
         this.setState({[name]:value})

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        // const username=this.state.username 
        fetch("http://localhost:4000/users",{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username:this.state.username})
        })
        .then(this.props.routerProps.history.push('/community'))
       
    }
    render(){
        return(
            <>
             <form onSubmit={this.handleSubmit}>
                 <label>
                   Username:
                  <input value={this.state.username} onChange={this.handleChange}type="text" name="username" />
                 </label>
                 <input type="submit" value="Submit" />

            </form>

            
            <form onSubmit={this.handleSubmit}>
                 <label>
                   Username:
                  <input value={this.state.username} onChange={this.handleChange}type="text" name="username" />
                 </label>
                 <input type="submit" value="Submit" />

            </form>
            </>
        )
    }
}