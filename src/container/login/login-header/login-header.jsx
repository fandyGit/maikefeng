import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { NavBar, Icon ,SearchBar} from 'antd-mobile';

class LoginHeader extends Component{
  render(){
    return (
      <div>
        <NavBar
          mode="light"
          icon={<i className='iconfont icon-index'></i>}
          onLeftClick={() => this.props.history.replace('/home')}
          rightContent={<i>注册</i>}
        >
        <i style={{fontSize:'20px',color:'rgba(390,40,50,.4)'}}>登录</i>
        </NavBar>
      </div>
    )
  }
}
export default withRouter(LoginHeader);