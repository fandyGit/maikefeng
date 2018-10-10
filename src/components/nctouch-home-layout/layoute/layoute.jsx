import React,{Component} from 'react'
import { Flex, WhiteSpace} from 'antd-mobile';

import './layoute.sass'
export default class Layoutc extends Component{
  render(){
    return (
        <Flex className='flex-container-e'>
          {
            this.props.layoute.map((item,index)=>{
              return (
                <Flex.Item key={index}>
                  <a href={item.data}>
                    <img className='pic-e' src={item.image} alt=""/>
                  </a>
                </Flex.Item>
              )
            })
          }
        </Flex>
    )
  }
}