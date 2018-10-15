import React,{Component} from 'react'
import { Flex, WhiteSpace ,WingBlank} from 'antd-mobile';
import LazyLoad from 'react-lazy-load'

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
                  {/*<LazyLoad height={100}>*/}
                    <img src={item.image} alt=""/>
                  {/*</LazyLoad>*/}
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