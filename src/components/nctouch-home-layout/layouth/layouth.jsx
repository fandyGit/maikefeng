import React,{Component} from 'react'
import { Flex} from 'antd-mobile';

export default class Layouth extends Component{
  render(){
    const {layouth1,layouth2,layouth3}=this.props;
    return (
      <div>
        <Flex direction='row'
              className='flex-container-home24'
              wrap='wrap'
        >
          {
            this.props.layouth1.map((item,index)=>{
              return (
                <img className='pic' src={item.image} alt={item.data}/>
              )
            })
          }
        </Flex>
        <Flex direction='row'
              className='flex-container-home24'
              wrap='wrap'
        >
          {
            this.props.layouth2.map((item,index)=>{
              return (
                <img className='pic' src={item.image} alt={item.data}/>
              )
            })
          }
        </Flex>
        <Flex direction='row'
              className='flex-container-home24'
              wrap='wrap'
        >
          {
            this.props.layouth3.map((item,index)=>{
              return (
                <img className='pic' src={item.image} alt={item.data}/>
              )
            })
          }
        </Flex>
      </div>

    )
  }
}