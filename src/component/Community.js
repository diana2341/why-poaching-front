import React from 'react'

export default class Community extends React.Component{
    state={
        animal:'',
        username:'',
        comment:''
    }

     handleChange=(event)=>{
         const{name,value,type}=event.target
         this.setState({[name]:value})

    }

    render(){
       
        return(
            <>
                <h1>Community</h1>
                <form>
                <label>
                        Choose topic:
                 <select name="animal"value={this.state.animal} onChange={this.handleChange}>
                    <option >select</option>
                    <option value="gorilla">Gorilla</option>
                    <option value="tiger">Tiger</option>
                    <option value="lemur">Lemur</option>
                    <option value="rhino">Rhino</option>
                    <option value="orangutan">Orangutan</option>
                    <option value="elephant">Elephant</option>
                </select>
                </label>
   
                    <label>
                        comment:
                    <textarea value={this.state.comment} onChange={this.handleChange}type="text" name="comment" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
        <h1>{this.state.username}{this.state.comment}{this.state.animal}</h1>

            </>
        )
    }
}