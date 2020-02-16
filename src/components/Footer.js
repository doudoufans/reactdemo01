import React from 'react';


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是底部组件'
         };
    }
    run=()=>{
        alert('我是底部组件run方法');
    }
    render() {
        return (
            <div>
                <h2>我是底部组件</h2>
            </div>
        );
    }
}

export default Footer;