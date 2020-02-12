import React, {Component} from 'react';
import '../assets/css/index.css';

class Home extends Component {

    constructor(){
        super()
        this.state={
            msg:'我是home组件',
            title:'我是一个标题',
            color:'red',
            style:{
                color:'green',
                fontSize:'40px'
            },
            name:'zhangbo'
        }
    }
    run(){
        alert('我是一个alert')
    }

    getData(){
        alert(this.state.msg)
    }
    getName=()=>{
        alert(this.state.name)
    }
//改变this的值
    setData=()=>{
       this.setState({
           msg:'修改后的home组件'
       })
    }

    //改变this的值
    setName=(str)=>{
        this.setState({
            name:str
        })
     }

     event=(event)=>{
         console.log(event);
         alert(event.target);//获取执行事件的dom节点
         event.target.style.background='red';
         alert(event.target.getAttribute('aid'))
     }

     inputChange=(e)=>{
         console.log( e.target.value);
         this.setState({
             msg:e.target.value,
         })
     }
     getInput=()=>{
         alert(this.state.msg);
     }
     
    render(){
    return (
        <div>
            <h2>{this.state.msg}</h2>
            <div title={this.state.title}>我是一个div</div>
            <br />
            <div className='red'>我是一个红色的div</div>
            <br />
            <label htmlFor="name">姓名:</label>
            <input id="name"></input>
            <br />
            <div style={{"color":"red"}}>我是一个红色的div</div>
            <br />
            <div style={this.state.style}>我是一个绿色的div，行内样式</div>
            <br />
            <button onClick={this.run}>执行方法</button>
            <br />
            <button onClick={this.getData.bind(this)}>获取参数</button>
            <br />
            <button onClick={this.getName}>获取参数2</button>
            <br />
            <button onClick={this.setData}>修改参数</button>
            <br />
            <button onClick={this.setName.bind(this,'zhangsan')}>传递参数</button>
            <br />
            <button aid='123' onClick={this.event}>事件测试</button>

            <br />
            <input onChange={this.inputChange}/>
            <button aid='123' onClick={this.getInput}>获取输入参数</button>
            </div>
    
    )
    }
}

export default Home;