import React from 'react'
import storage from '../model/storage'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[
                {
                    'title':"睡觉",
                    'checked':true,
                },
                {
                    'title':"吃饭",
                    'checked':false,
                },
                {
                    'title':"打豆豆",
                    'checked':true,
                }
            ],
         };
    }

    inputChange=(e)=>{
        this.setState({
            userName:e.target.value,
        })
    }
    addData=(e)=>{
        if(e.keyCode==13){
            let title=this.refs.title.value;
            alert(title)
            var tempList=this.state.list;
            tempList.push({
                title:title,
                checked:false
            });
            this.setState({
                list:tempList,
            })  
            this.refs.title.value='';
            // 缓存数据
            storage.set('todoList',tempList);
        }
     
      
    }
    checkboxChange=(key)=>{
        var tempList=this.state.list;
        tempList[key].checked=!tempList[key].checked;
        this.setState({
            list:tempList,
        }) 
        storage.set('todoList',tempList);

    }
    removeData=(key)=>{
        alert(key);
        var tempList=this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList,
        })
        storage.set('todoList',tempList);
    }
    // 生命周期函数
    componentDidMount(){
        var todolist=storage.get('todoList');
        if(todolist){
            this.setState(
                {
                    list:todolist,
                }
            )

        }

    }
    render() {
        return (
            <div>
                <input ref="title" onKeyUp={this.addData}></input>
                <h2>代办事项</h2>
                {this.state.list.map((value,key)=>{
                    if(!value.checked){
                        return(
                            <li key={key}>
                                <input type='checkbox' checked={value.checked} onChange={this.checkboxChange.bind(this,key)}/>
                                {value.title}
                                ---<button onClick={this.removeData.bind(this,key)}>删除</button>
                            </li>
                        )        
                    }    
                })}
                <h2>已完成事项</h2>
                {this.state.list.map((value,key)=>{
                    if(value.checked){
                        return(
                            <li key={key}>
                                <input type='checkbox' checked={value.checked} onChange={this.checkboxChange.bind(this,key)}/>
                                {value.title}
                                ---<button onClick={this.removeData.bind(this,key)}>删除</button>
                            </li>
                        )        
                    }    
                })}
            </div>
            
        );
    }
}

export default TodoList;