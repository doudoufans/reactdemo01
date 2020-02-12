import React from 'react';
import './App.css';
import Home from './compenents/Home'
import News from './compenents/New';
import List from './compenents/List';
import TodoList from './compenents/TodoList';
import TextFrom from './compenents/TextFrom';

function App() {
  return (
    <div className="App">
      <TodoList />
      <hr />
      <TextFrom />
      <hr />
      <List />
      <hr />
      <Home/>
      <hr />
      <News/>
    </div>
  );
}

export default App;
