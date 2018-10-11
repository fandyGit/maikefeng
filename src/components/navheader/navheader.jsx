import React,{Component} from 'react'

import { NavBar, Icon ,InputItem,SearchBar} from 'antd-mobile';

export default class NavHeader extends Component{
  render(){
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<i className='iconfont icon-saoma'></i>}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={<i className='iconfont icon-denglu'></i>}
        >
          <SearchBar placeholder='客官,查找你的商品'/>
        </NavBar>
      </div>
    )
  }
}