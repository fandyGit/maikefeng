import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

import { NavBar, Icon ,InputItem,SearchBar} from 'antd-mobile';

class NavHeader extends Component{

  handleLogin=()=>{
    this.props.history.replace('/login');
  }
  render(){
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<i className='iconfont icon-saoma'></i>}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={<i className='iconfont icon-denglu' onClick={this.handleLogin}></i>}
        >
          <SearchBar placeholder='客官,查找你的商品'/>
        </NavBar>
      </div>
    )
  }
}
export default withRouter(NavHeader)