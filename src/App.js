import React from 'react';
import logo from './logo.svg';
import './App.css';
import Forecast from './getForecast'
function App() {
  return (
    <div>
      <h1>React weather App</h1>
      <main>
        <Forecast></Forecast>
      </main>
      <footer>
        Page created by Lars Moran
      </footer>
    </div>
  );
}

export default App;
