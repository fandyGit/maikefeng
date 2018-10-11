import React,{Component} from 'react'
import { Flex} from 'antd-mobile';

// import './layoutf.sass'
export default class Layoutf extends Component{
  render(){
    return (
        <Flex className='flex-container-home1'>
          {
            this.props.layoutf.map((item,index)=>{
              return (
                <Flex.Item key={index}>
                  <a href={item.data}>
                    <img className='pic' src={item.image} alt=""/>
                  </a>
                </Flex.Item>
              )
            })
          }
        </Flex>
    )
  }
}