import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; //可以删除
import App from './App'; //引入App组件
import * as serviceWorker from './serviceWorker'; //

ReactDOM.render(<App />, document.getElementById('root')); //渲染App组件到root位置

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
