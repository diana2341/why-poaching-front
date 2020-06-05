import React from 'react'

export default class AnmialList extends React.Component{
   
    render(){
        return(
            <>
          <h3 className="headlines">Endangered animals being poached</h3>
          <div className="animal-list">
          {this.props.animal.map(animal=>{return <> <p key={animal.id}onClick={this.props.mapFilter}id={animal.name} className=" box-text">{animal.name}</p><br/></>})}
           
        {this.props.animal.map(animal=>{
        return(
            this.props.show===animal.id?
            
                <div key={animal.id}id= {animal.name}className="content">
                <div className="profilecard">
                    <div className="me">
                        <div className="avatar">
                            <img src={animal.img_url} alt={animal.name} />
                        </div>
                        <div className="username">
                      <span><strong>{animal.name}</strong></span>
                
                        </div>
                    </div>
                    <div className="role">
                    <span><strong>Status: </strong>{animal.status}</span><br/>
                    <span><strong>Lifespan: </strong>{animal.lifespan}</span><br/>
                    <span><strong>Population: </strong>{animal.population}</span><br/>
                    <button onClick={()=>{this.props.routerProps.history.push(`map/${animal.id}`)}}className="why-btn"> why am I being poached ?</button>


                    </div>

                </div>
            </div>
            :null
        )})}   
    
    </div>

            </>

        )
    }
}