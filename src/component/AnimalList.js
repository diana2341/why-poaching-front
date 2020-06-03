import React from 'react'

export default class AnmialList extends React.Component{
    render(){
        return(
            <>
            <h3 className="headlines">Endangered animals being poached</h3>
            <div className="animal-list">
                <p className="box-text">Elephant</p><br/>
                <p className="box-text">Rhino</p><br/>
                <p className="box-text">Tiger</p><br/>
                <p className="box-text">Gorilla</p><br/>
                <p className="box-text">Lemurs</p><br/>
                <p className="box-text">Chimpanzee</p><br/>
            </div>
            <div className="basic info">

            </div>
            </>

        )
    }
}