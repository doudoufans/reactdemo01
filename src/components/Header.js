import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'这个一个头部组件'
         };
    }
    getNews=()=>{
        alert(this.props.news.state.msg);
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                {/* <button onClick={this.props.run}>调用父组件的run方法</button>
                <br/>
                <button onClick={this.props.news.getData}>调用父组件的getData方法</button>
                <br/>
                <button onClick={this.getNews}>调用父组件的getData方法</button>
                <br/>
                <button onClick={this.props.news.getChildData.bind(this,"我是子组件的数据")}>子组件给父组件传值</button> */}

            </div>
        );
    }
}

Header.defaultProps={
    title:'标题'
}

export default Header;