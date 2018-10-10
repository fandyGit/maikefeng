import React,{Component} from 'react'
import { Flex, WhiteSpace ,WingBlank} from 'antd-mobile';

import './nctouch-nav-home.sass'

export default class NctouchNavHome extends Component{
  state={
    imgs:[
      {
        id:1,
        title:'分类',
        url:'http://www.51mkf.com/wap/images/browse_list_w.png'
      },
      {
        id:2,
        title:'购物车',
        url:'http://www.51mkf.com/wap/images/cart_w.png'
      },
      {
        id:3,
        title:'我的商城',
        url:'http://www.51mkf.com/wap/images/member_w.png'
      },
      {
        id:4,
        title:'客户服务',
        url:'http://www.51mkf.com/wap/images/mcc_04_w.png'
      },
      {
        id:5,
        title:'门店列表',
        url:'http://www.51mkf.com/wap/images/service_w.png'
      },
    ]
  }
  render(){
    return (
      <WingBlank className='flex-container'>
        <WhiteSpace size="lg" />
        <Flex>
          {
            this.state.imgs.map(item=>{
              return (
                  <Flex.Item>
                    <img className='pic' src={item.url} alt={item.title}/>
                    <i>{item.title}</i>
                  </Flex.Item>
              )})
          }
        </Flex>
        <WhiteSpace size="lg" />
      </WingBlank>
    )
  }
}