import React from 'react';
import { Form } from './Components/Template/Form'
import { Provider } from 'react-redux';
import store from './Components/Redux'
import { useDispatch } from 'react-redux'

function App() {
    store.subscribe(()=> console.log(store.getState()))
  return (
    <div>
      <Form></Form>
    </div>
  )
}

export default App;
