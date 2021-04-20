import axios from 'axios'
import React, { Component } from 'react'
import {Consumer} from "../context"

export default class Todo extends Component {


    style = ()=>{
const {complete} = this.props.todo
return { textDecoration: complete ? "line-through" : "none"}
    }
    toggle = (id,dispatch,value)=>{
        dispatch({type:"TOGGLE",payload: id,val:value})
    }
    remove = (id,dispatch)=>{
        axios.delete(`/todos/${id}`)
        .then(()=> dispatch({type:"REMOVE",payload: id})
        )
    }

    render() {
        const { title, _id,complete} = this.props.todo;
        return (
          
                <Consumer>{value =>{
                    const {dispatch} = value
                    return    <div className="row">
                    <div className="col-12">
                    <h3 className="text-dark text0center p-1 bg-light border-bottom" style={this.style()}>
                    <span onClick={this.toggle.bind(this,_id,dispatch,!complete)}> {title}</span>
                    <button className= "btn btn-danger"  style={{float: "right"}} type="submit" onClick={this.remove.bind(this,_id,dispatch)}> ADD</button>
                    </h3>
                    
                    </div>
                   

                    </div>
                    
                            
                    
                }}</Consumer>
                
        )
    }
}
