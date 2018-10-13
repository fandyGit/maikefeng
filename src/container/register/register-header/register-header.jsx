import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { NavBar, Icon ,SearchBar} from 'antd-mobile';

class RegisterHeader extends Component{
  render(){
    return (
      <div>
        <NavBar
          mode="light"
          icon={<i className='iconfont icon-index'></i>}
          onLeftClick={() => this.props.history.replace('/home')}
        >
          <i style={{fontSize:'20px',color:'rgba(390,40,50,.4)'}}>会员注册</i>
        </NavBar>
      </div>
    )
  }
}
export default withRouter(RegisterHeader);