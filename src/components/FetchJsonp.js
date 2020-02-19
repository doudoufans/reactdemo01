import React from 'react';
import fetchJsonp from 'fetch-jsonp';

class FetchJsonp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            list:[]
        };
    }
    getData=()=>{
        alert("test")
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20'; //接口后台允许跨域
        fetchJsonp(api)
            .then(function(response) {
                return response.json()
            }).then((json)=> {
                console.log( json)
                this.setState({
                    list:json.result,
                })
            }).catch(function(ex) {
                console.log(ex)
            })

    }
    render() {
        return (
            <div>
                <h2>FetchJsonp 获取数据</h2>
                <button onClick={this.getData}>获取服务器JSONP数据</button>
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

export default FetchJsonp;