import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import News from './components/News';
// import Axios from './components/Axios';
// import FetchJsonp from './components/FetchJsonp';
// import Lifecycle from './components/Lifecycle';
import Product from './components/Product';
import Content from './components/Content';
import ProductContent from './components/ProductContent'

function App() {
  return (
    <Router>
      <div>
        <header className='App-header'>
        <Link to="/">首页</Link>
        <Link to="/news">新闻</Link>
        <Link to="/product">商品</Link>
        </header>    
          <Route exact path="/" component={Home}/>
          <Route path="/news" component={News} />
          <Route path="/product" component={Product}/>
          <Route path="/content/:aid" component={Content}/>   
          <Route path="/productcontent" component={ProductContent}/>   
 
      </div>
    </Router>
  );
}

export default App;
