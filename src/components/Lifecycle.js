import React from 'react';

class Lifecycle extends React.Component {
    constructor(props) {
        super(props);
        console.log('01构造函数--')
        this.state = { 
            msg:'我是msg消息'
         };
    }

    componentWillMount(){
        console.log('02组件挂载--')

    }

    componentDidMount(){
        //dom  操作和请求数据放到这里
        console.log('04组件渲染完后执行--')
    }
    //组件是否要更新数据
    shouldComponentUpdate(nextProps,nextState){
        console.log('00组件是否要更新数据')
        console.log(nextProps)
        console.log(nextState)


        return true;
    }
    //组件将要更新
    componentWillUpdate(){
        console.log('01组件将要更新')
    }
    //组将更新完成
    componentDidUpdate(){
        console.log('02组件数据更新完成')
    }

    //组件销毁的触发的生命周期函数(用在组件销毁操作)
    componentWillUnmount(){
        console.log('组件销毁了')

    }

    setData=()=>{
        this.setState({
            msg:'我是修改后的msg'
        })
    }
    render() {
        console.log('03组件的render渲染--')
        return (
            <div>
                生命周期函数---{this.state.msg}
                <br />
                <br />
                <button onClick={this.setData}> 更新msg信息</button>
            </div>
            
        );
    }
}

export default Lifecycle;