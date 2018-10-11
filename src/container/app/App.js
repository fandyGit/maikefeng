import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'

import Home from '../home/home'
import Category from '../category/category'
import Find from '../find/find'
import Cart from '../cart/cart'
import Mine from '../mine/mine'
import NavFooter from '../../components/navfooter/navfooter'
import '../../assets/sass/index.sass'
class App extends Component {
  render() {
    let { routes } = this.props
    return (
      <div className='app'>
        <Switch>
          { routes.map(({ id, path, component, render, exact }) => (
            <Route key = {id} exact = {exact} path = {path} component = {component} render = {render} />
          )) }
          <Redirect to='/home'></Redirect>
        </Switch>

        <NavFooter routes={routes}></NavFooter>
      </div>
    );
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
      component: Category
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

export default App;
