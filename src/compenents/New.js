import React from 'react';

import images from '../assets/images/grils.jpeg'


class News extends React.Component {

    constructor(props){
        super(props)//父子组件传值

        this.state={
            msg:'新闻'
        }

    }



    render(){
    return (
        <div className='news'> 
           {this.state.msg}
           <img src={images}></img>
        </div>
    
    )
    }
}

export default News;