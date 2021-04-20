import React from 'react';
import "./App.css";
import Header from './componenets/Header'
import Addtodo from './componenets/Addtodo'
import Todos from './componenets/Todos'
import {Provider} from './context'

import './App.css';

function App() {
  return (
    <Provider> 
    <div className="app-container">
    <Header />
    <Addtodo />
    <Todos />
    </div>
    </Provider>
    
  );
}

export default App;
