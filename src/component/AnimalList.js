import React from 'react'




export default class AnmialList extends React.Component{

    render(){
    


        return(
            <>
          <h3 className="headlines">Endangered Animals Being Poached</h3>
          <div className="animal-list">
          {this.props.animal.map((animal,index)=>{return <div  key={index}> <p onClick={this.props.mapFilter}id={animal.name} className=" box-text ">{animal.name}</p><br/></div>})}
           
        {this.props.animal.map((animal,index)=>{
        return(
            this.props.show===animal.id?
            
                <div key={index}id= {animal.name}className="content">
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
                    <button onClick={()=>{this.props.routerProps.history.push(`map/${animal.name}/${animal.id}`)}}className="why-btn"> Why am I being poached ?</button>


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