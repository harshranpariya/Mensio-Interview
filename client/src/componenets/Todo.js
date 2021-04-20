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
        dispatch({type:"REMOVE",payload: id})
    }

    render() {
        const { title, id,complete} = this.props.todo;
        return (
          
                <Consumer>{value =>{
                    const {dispatch} = value
                    return    <h3 className="text-dark text0center p-1 bg-light border-bottom" style={this.style()}>
                    <i className="far fa-times-circle fa-sm float-left m-1 text-danger" onClick={this.remove.bind(this,id,dispatch)}></i><span onClick={this.toggle.bind(this,id,dispatch,!complete)}> {title}</span>
                    </h3>
                }}</Consumer>
                
        )
    }
}
