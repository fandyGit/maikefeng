import React,{Component} from 'react'
import { Flex, WhiteSpace ,WingBlank} from 'antd-mobile';

import './layoutg.sass'

export default class Layoutg extends Component{
  render(){
    return (
      <div>
        <Flex direction='row'
              className='flex-containers'
              wrap='wrap'
        >
          {
            this.props.layoutg.map((item,index)=>{
              return (
                <a href={`http://www.51mkf.com/wap/tmpl/product_detail.html?goods_id=${item.data}`} key={index}>
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