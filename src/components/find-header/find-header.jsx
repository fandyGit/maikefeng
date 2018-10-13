import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { NavBar, Icon ,SearchBar} from 'antd-mobile';

class FindHeader extends Component{
  render(){
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.replace('/home')}
          rightContent={<Icon key="1" type="ellipsis" />}
        >
        <i style={{fontSize:'20px',color:'rgba(390,40,50,.4)'}}>门店列表</i>
        </NavBar>
      </div>
    )
  }
}
export default withRouter(FindHeader);