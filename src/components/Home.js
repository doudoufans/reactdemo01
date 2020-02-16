import React from 'react';
import Header from './Header';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是首页组件',
            title:'首页组件'
         };
    }
    render() {
        return (
            <div>
                <br/>
                <Header  title={this.state.title}/>     
                <br/>
                <hr/>
                这是首页组件
            </div>
        );
    }
}

export default Home;