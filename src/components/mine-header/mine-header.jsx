import React,{Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';

export default class MineHeader extends Component{
  render(){
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<i className='iconfont icon-shezhi'></i>}
          onLeftClick={() => this.props.history.replace('/home')}
          rightContent={<Icon key="1" type="ellipsis" />}
        >
        </NavBar>
      </div>
    )
  }
}
