import React,{Component} from 'react'
import { Flex, WhiteSpace} from 'antd-mobile';

// import './layoute.sass'
export default class Layoutc extends Component{
  render(){
    return (
        <Flex className='flex-container-home14'>
          {
            this.props.layoute.map((item,index)=>{
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