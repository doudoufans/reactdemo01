import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  list:[
            {
                bid:1,
                title:'我是商品111'
            },
            {
                bid:2,
                title:'我是商品222'
            },
            {
                bid:3,
                title:'我是商品333'
            }
        ] };
    }
    render() {
        return (
            <div>
                我是商品组件
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                        return (<li key={key}>
                            {/* {value.title} */}
                             {/* <Link to="/content">{value.title}</Link> */}
                             <Link to={`/productcontent?bid=${value.bid}`}>{value.title}</Link>     
                            </li>)
                        })
                        
                    }
                </ul>
            </div>
        );
    }
}

export default Product;