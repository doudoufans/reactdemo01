import React from 'react';
import axios from 'axios';

class Axios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            list:[]
        };

    }
    getData=()=>{
        // alert("test")
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'; //接口后台允许跨域
        axios.get(api)
        .then((response)=>{
            // handle success
            console.log(response);
            this.setState({
                list:response.data.result
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    }

    componentDidMount(){
        this.getData();
    }
    render() {
        return (
            <div>
                <h2>axios 获取数据</h2>
                <button onClick={this.getData}>获取服务器数据</button>
                <ul>
                    {
                        this.state.list.map((value,key)=>{
                            return <li key={key}>{value.title}</li>
                        }
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Axios;