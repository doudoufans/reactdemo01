import React from 'react';
//在react里使用，需要安装url模块
import url from 'url';
class ProductContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    //获取get传值
    componentDidMount(){
        console.log(url.parse(this.props.location.search,true))
        var query=url.parse(this.props.location.search,true).query;
        console.log(query)
    }
    render() {
        return (
            <div>
                我是商品详情
            </div>
        );
    }
}

export default ProductContent;