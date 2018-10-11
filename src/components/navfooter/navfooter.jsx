import React,{Component} from 'react'
import { TabBar } from 'antd-mobile';
import {withRouter} from 'react-router-dom' ;
const Item=TabBar.Item
class NavFooter extends Component{
  render() {
    const {routes}=this.props;
    const path=this.props.location.pathname;
    return (
      <TabBar tabBarPosition="bottom"
              style={{ position: 'fixed', height: '50px', width: '100%', bottom: '100px' }}
      >
        {
          routes.map(route=>(
            <Item key={route.path}
                  title={route.title}
                  icon={{uri:require(`./images/${route.icon}.png`)}}
                  selectedIcon={{uri:require(`./images/${route.icon}-selected.png`)}}
                  selected={path.match(route.path)}
                  onPress={() => {
                    this.props.history.replace(route.path);
                  }}
            ></Item>
          ))
        }
      </TabBar>
    );
  }
}
//将非路由组件包装成路由组件，使其有路由组件的属性
export default withRouter(NavFooter)