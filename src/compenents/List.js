import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    inputChange=()=>{
        let val=this.refs.userName.value;
        this.setState({
            userName:val
        })

    }
    getInput=()=>{
        alert(this.state.userName);
    }
    //键盘事件
    inputKeyUp=(e)=>{
        console.log(e.keyCode);
        if(e.keyCode==13){
            alert(e.target.value);
        }
     }

    render() {
        return (
            <div>
            <input ref='userName' onChange={this.inputChange}/>
            {/* MVVM */}
            <button aid='123' onClick={this.getInput}>获取输入框的值</button>  
            <br />
            <input onKeyUp={this.inputKeyUp}/>
        </div>
        );
    }
}

export default List;