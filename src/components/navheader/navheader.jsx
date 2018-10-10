import React,{Component} from 'react'

import { NavBar, Icon ,InputItem} from 'antd-mobile';

export default class NavHeader extends Component{
  render(){
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<i className='iconfont icon-saoma'>扫一扫</i>}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '10px' }} />,
          ]}
        >
          <InputItem type='text'>搜索</InputItem>
        </NavBar>
      </div>
    )
  }
}