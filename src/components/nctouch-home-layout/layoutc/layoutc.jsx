import React,{Component} from 'react'
import { Flex, WhiteSpace ,WingBlank} from 'antd-mobile';

import './layoutc.sass'

export default class Layoutc extends Component{
  render(){
    console.log(this.props.layoutc)
    return (
      <div>
        <Flex direction='row'
              className='flex-containers'
              wrap='wrap'
        >
          {
            this.props.layoutc.map((item,index)=>{
              return (
                <a href={item.data} key={index}>
                  <img src={item.image} alt=""/>
                </a>
              )
            })
          }
        </Flex>
        <Flex direction='row'
              className='flex-containers'
              wrap='wrap'
        >
          {
            this.props.layoutd.map((item,index)=>{
              return (
                <a href={item.data} key={index}>
                  <img src={item.image} alt=""/>
                </a>
              )
            })
          }
        </Flex>

      </div>

    )
  }
}