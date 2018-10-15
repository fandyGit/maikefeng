import React,{Component} from 'react'
import { Flex, WhiteSpace} from 'antd-mobile';
import LazyLoad from 'react-lazy-load'

export default class Layoutc extends Component{
  render(){
    return (
        <Flex className='flex-container-home14'>
          {
            this.props.layoute.map((item,index)=>{
              return (
                <Flex.Item key={index}>
                  <a href={item.data}>
                    {/*<LazyLoad height={100}>*/}
                      <img className='pic' src={item.image} alt=""/>
                    {/*</LazyLoad>*/}
                  </a>
                </Flex.Item>
              )
            })
          }
        </Flex>
    )
  }
}