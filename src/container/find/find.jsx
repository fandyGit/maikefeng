import React,{Component} from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import BScroll from 'better-scroll'

import FindHeader from '../../components/find-header/find-header'
import ChildFind from "./childfind/childfind";

export default class Find extends Component{
  render(){
    return (
      <div>
        <FindHeader></FindHeader>
        <div className='goods'>
          <div className='menu-wrapper' style={{height:'400px'}}>
            <ul>
              <li>
                <NavLink to='/find/childfind/0'>
                  <i className='iconfont icon-shoucang'></i>
                  <span>全部门店</span>
                </NavLink >
              </li>
              <li>
                <NavLink to='/find/childfind/11'>
                  <i className='iconfont icon-shoucang'></i>
                  <span>浙江</span>
                </NavLink >
              </li>
              <li>
                <NavLink to='/find/childfind/13'>
                  <i className='iconfont icon-shoucang'></i>
                  <span>福建</span>
                </NavLink >
              </li>
              <li>
                <NavLink to='/find/childfind/19'>
                  <i className='iconfont icon-shoucang'></i>
                  <span>广州</span>
                </NavLink >
              </li>
              <li>
                <NavLink to='/find/childfind/21'>
                  <i className='iconfont icon-shoucang'></i>
                  <span>海南</span>
                </NavLink >
              </li>
            </ul>
          </div>
          <div className='electro-wrapper'>
            <ul className='content'>
              <li>
                <Switch>
                  <Route path='/find/childfind/:aid' component={ChildFind}></Route>
                </Switch>
              </li>
            </ul>

          </div>
        </div>
      </div>
    )
  }
}