import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import { NavBar, Icon ,SearchBar} from 'antd-mobile';

class CategoryHeader extends Component{
  render(){
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.goBack()}
          rightContent={<Icon key="1" type="ellipsis" />}
        >
          <SearchBar placeholder='客官,查找你的商品'/>
        </NavBar>
      </div>
    )
  }
}
export default withRouter(CategoryHeader);