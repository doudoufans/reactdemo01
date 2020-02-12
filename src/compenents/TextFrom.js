import React from 'react';


class TextFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'react 表单',
            name:'',
            sex:1,
            city:'',
            citys:[
            '北京','上海','深圳'
                        ],
        hobby:[
            {
                'title':"睡觉",
                'checked':true,
            },
            {
                'title':"吃饭",
                'checked':true,
            },
            {
                'title':"打豆豆",
                'checked':true,
            },
        ]  
         };

       
    }
    handeSbumit=(e)=>{
        //组织自动提交
        e.preventDefault();
        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby);
      
    }
    handeName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handeSex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    handleCity=(e)=>{
        this.setState({
            city:e.target.value
        })

    }
    handeHobby=(key)=>{
            var hobby=this.state.hobby;
            hobby[key].checked=!hobby[key].checked;
        this.setState({
            hobby:hobby
        })

    }
    render() {
        return (
            <div>
              <form onSubmit={this.handeSbumit}>
                 用户名： <input type='text' value={this.state.name} onChange={this.handeName}/><br/>
                 性别： <input type='radio' value='1' checked={this.state.sex==1} onChange={this.handeSex}/>男
                       <input type='radio' value='2' checked={this.state.sex==2} onChange={this.handeSex}/>女<br/>
                居住城市: <select value={this.state.city} onChange={this.handleCity}>
                    {
                        this.state.citys.map(function(value,key) {
                        return  <option key={key}>{value}</option>
                        
                        })
                    }
                   
                </select>
                <br/>
                爱好:{
                    this.state.hobby.map((value,key)=>{
                        return  (
                            <span key={key}>
                                {value.title}<input type='checkbox' checked={value.checked}  onChange={this.handeHobby.bind(this,key)}/>
                            </span>
                        )   
                        })
                }
                <br/>
                  <input type='Submit' defaultValue='提交' />
              </form>
            </div>
            
        );
    }
}

export default TextFrom;