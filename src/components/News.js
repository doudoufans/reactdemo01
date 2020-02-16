import React from 'react';
import Header from './Header';
import Footer from './Footer';

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:'新闻组件',
            msg:'新闻组件消息'
         };
    }

    run=()=>{
        alert("我是父组件的run方法");
    }
    getData=()=>{
        alert("我是父组件的getData方法");
    }
    //获取子组件里面传过来的数据
    getChildData=(result)=>{
        alert(result);
        this.setState({
            msg:result,
        })

    }
    
    getFooterData=()=>{
        // alert(this.refs.footer.state.msg)
        this.refs.footer.run()
    }

    render() {
        return (
            <div>
                <br/>
                <Header  title={this.state.title} run={this.run} news={this}/>     
                <br/>
                <hr/>
                这是新闻组件--{this.state.msg}
                <br/>
                <button onClick={this.getFooterData}>获取底部组件数据</button>
                <br/>
                <br/>
                <Footer ref='footer'></Footer>
            </div>
        );
    }
}

export default News;