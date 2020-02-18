import React from 'react';
import './App.css';
import Home from './components/Home';
import News from './components/News';
import Axios from './components/Axios';
import FetchJsonp from './components/FetchJsonp';

function App() {
  return (
    <div className="App">
     <FetchJsonp />
     <Axios />
     <Home />
     {/* <News /> */}
     <br/>
    </div>
  );
}

export default App;
