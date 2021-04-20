import React, { Component } from 'react'
import axios from 'axios'
import {Consumer} from "../context"
export default class Addtodo extends Component {
    state={
        id:0,
        title:"",
        complete:false
    }

    update = (e)=>{
        this.setState({
            title:e.target.value
        })
    }

    add = (dispatch,e)=>{
        e.preventDefault()
        const newTodo = this.state
        axios.post("/todos",newTodo)
        .then(res=>dispatch({type:"ADD",payload: newTodo}))
        this.setState({title:""})
        window.location.reload();
    }
    render() {
        return (
            <Consumer>{value=>{
                const {dispatch} = value;
                return <div>
                    
                        <form onSubmit={this.add.bind(this,dispatch)}>
                            
                        <div className="form-group row">
                            <div className="col-10">
                            <input type="text" className="form-control rounded-0 " placeholder="Write todo.." onChange={this.update} value={this.state.title}/>
                                </div>
                            <div className="col-2">
                            <button className= "form-control rounded-0 btn-secondary" style={{float: "right"}} type="submit"> ADD</button>
                            </div>
                        </div>
                         
                        </form>
                        </div>
            }}
            
            
            </Consumer>

            
        )
    }
}
