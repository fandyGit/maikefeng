import React,{Component} from 'react'
import { Flex} from 'antd-mobile';

// import './layoutg.sass'

export default class Layoutg extends Component{
  render(){
    return (
      <div>
        <Flex direction='row'
              className='flex-container-home3'
              wrap='wrap'
        >
          {
            this.props.layoutg.map((item,index)=>{
              return (
                <a href={`http://www.51mkf.com/wap/tmpl/product_detail.html?goods_id=${item.data}`} key={index}>
                  <img className='pic' src={item.image} alt=""/>
                </a>
              )
            })
          }
        </Flex>
      </div>

    )
  }
}