import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    aid:1,
                    title:'我是新闻111'
                },
                {
                    aid:2,
                    title:'我是新闻222'
                },
                {
                    aid:3,
                    title:'我是新闻333'
                }
            ]
         };
    }
    componentDidMount(){
        console.log(this.state)
    }

    render() {
        return (
            <div>
                我是新闻组件
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                        return (<li key={key}>
                            {/* {value.title} */}
                             {/* <Link to="/content">{value.title}</Link> */}
                             <Link to={`/content/${value.aid}`}>{value.title}</Link>     
                            </li>)
                        })
                        
                    }
                </ul>
            </div>
        );
    }
}

export default News;