import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Ccounter from './features/redux/Counter';

function App() {
  return (
    <div className="App">
      <Ccounter/>
    </div>
  );
}

export default App;
 