import React from 'react';
import store from './Components/Store'
import addTodo from './Components/Actions'
import TodoList from './Components/TodoItem'
import {useDispatch} from 'react-redux'
import rootReducer from './Components/Reducers'
import './App.css';


function App() {
  
  store.subscribe(() => console.log(store.getState()))
  
  return (
    <TodoList></TodoList>
  )
}

export default App;
