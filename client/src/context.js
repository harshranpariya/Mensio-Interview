import React, { Component } from 'react'

const Context = React.createContext();
const reducer = (prevState,action) => {
    switch(action.type){
        case "TOGGLE": 
            return { todos: prevState.todos.map(t => { if(t.id === action.payload){t.complete = action.val}; return t})}
        case "REMOVE": 
            return { todos: prevState.todos.filter(todo => todo.id !== action.payload)}

        case "ADD": 
            return { todos: [...prevState.todos,action.payload]}

        default:
            return prevState
    }
}
export class Provider extends Component {

    state={
        todos: [
            {
            id:1,
            title:"test1",
            complete:true
            },
            {
            id:2,
            title:"test2",
            complete:false
            }                
        ],
        dispatch:(action)=>this.setState(prevState => reducer(prevState,action))

    }
    render() {
        return (
            <div>
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider>
            </div>
        )
    }
    
}
export const Consumer = Context.Consumer;
