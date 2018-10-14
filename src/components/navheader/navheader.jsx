import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import { NavBar, Icon ,InputItem,SearchBar} from 'antd-mobile';

class NavHeader extends Component{

  handleLogin=()=>{
    this.props.history.replace('/login');
  }
  render(){
    const {username}=this.props.user;
    return (
      <div>
        <NavBar
          mode="light"
          icon={<i className='iconfont icon-saoma'></i>}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={<span style={{textAlign:'center',paddingLeft:'5px'}}>{username?username:<i className='iconfont icon-denglu' onClick={this.handleLogin}></i>}</span>}
        >
          <SearchBar placeholder='客官,查找你的商品'/>
        </NavBar>
      </div>
    )
  }
}
NavHeader=withRouter(NavHeader)
export default connect(
  state=>({user:state})
)(NavHeader)