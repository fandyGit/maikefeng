import React,{Component} from 'react'
import { Flex, WhiteSpace ,WingBlank} from 'antd-mobile';

export default class Layoutc extends Component{
  render(){
    return (
      <div>
        <Flex direction='row'
              className='flex-container-home3'
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
              className='flex-container-home3'
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