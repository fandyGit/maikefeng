import React,{Component} from 'react'
import { Flex} from 'antd-mobile';

export default class Layoutf extends Component{
  render(){
    return (
        <Flex className='flex-container-home14'>
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