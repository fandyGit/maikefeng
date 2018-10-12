import React,{Component} from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import BScroll from 'better-scroll'

import CategoryHeader from '../../components/category-header/category-header'
import Childcategory from './childcategory/childcategory'

import './category.sass'

export default class Category extends Component{
  componentDidMount(){
    let scroll = new BScroll('.electro-wrapper')
  }
  render(){
    return (
      <div>
        <CategoryHeader></CategoryHeader>
        <div className='goods'>
          <div className='menu-wrapper' style={{height:'400px'}}>
            <ul>
              <li>
                <NavLink to='/category/childcategory/11'>
                  <i className='iconfont icon-shouji'></i>
                  <span>手机通讯</span>
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/childcategory/1230'>
                  <i className='iconfont icon-diannao'></i>
                  电脑办公
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/childcategory/308'>
                  <i className='iconfont icon-icon_zhinengjiadian'></i>
                  智能家电
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/childcategory/1184'>
                  <i className='iconfont icon-xihumeizhuang'></i>
                  洗护美妆
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/childcategory/1197'>
                  <i className='iconfont icon-riyongbaihuo'></i>
                  日用百货
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/childcategory/1255'>
                  <i className='iconfont icon-cars'></i>
                  汽车用品
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/childcategory/1256'>
                  <i className='iconfont icon-babies'></i>
                  母婴用品
                </NavLink >
              </li>
              <li>
                <NavLink to='/category/childcategory/1185'>
                  <i className='iconfont icon-jiushui'></i>
                  食品酒水
                </NavLink >
              </li>
            </ul>
          </div>
          <div className='electro-wrapper'>
            <ul className='content'>
              <li>
                  <Switch>
                    <Route path='/category/childcategory/:id'  component={Childcategory}></Route>
                    <Redirect to='/category/childcategory/11'></Redirect>
                  </Switch>
              </li>
            </ul>

          </div>
        </div>
      </div>
    )
  }
}