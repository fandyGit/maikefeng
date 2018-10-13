import React, { Component } from 'react';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom'

import Home from '../home/home'
import Category from '../category/category'
import Find from '../find/find'
import Cart from '../cart/cart'
import Mine from '../mine/mine'
import Login from '../login/login'
import Register from '../register/register'
import NavFooter from '../../components/navfooter/navfooter'
import '../../assets/sass/index.sass'
class App extends Component {
  render() {
    let { routes } = this.props
    let path=this.props.location.pathname;
    if(path==='/login'||path==='/register'){
      return (
        <div className='app'>
          <Switch>
            { routes.map(({ id, path, component, exact }) => (
              <Route key = {id} path = {path} component = {component}/>
            )) }
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Redirect to='/home'></Redirect>
          </Switch>
        </div>
      );
    }else{
      return (
        <div className='app'>
          <Switch>
            { routes.map(({ id, path, component, exact }) => (
              <Route key = {id} path = {path} component = {component}/>
            )) }
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Redirect to='/home'></Redirect>
          </Switch>
          <NavFooter routes={routes}></NavFooter>
        </div>
      );
    }

  }
}
App.defaultProps = {
  routes: [
    {
      id: 1,
      path: '/home',
      component: Home,
      icon:'home',
      title:'首页',
      exact: true
    },
    {
      id: 2,
      path: '/category',
      icon:'category',
      title:'分类',
      component: Category,
    },
    {
      id: 3,
      path: '/find',
      icon:'find',
      title:'发现',
      component: Find
    },
    {
      id: 4,
      path: '/cart',
      icon:'cart',
      title:'购物车',
      component: Cart
    },
    {
      id: 5,
      path: '/mine',
      icon:'mine',
      title:'我的',
      component: Mine
    },
  ]
}

export default withRouter(App);
