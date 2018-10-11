import React,{Component} from 'react'
import {NavLink,Route,Switch} from 'react-router-dom'
import BScroll from 'better-scroll'

import CategoryHeader from '../../components/category-header/category-header'
import Mcommunication from './mcommunication/mcommunication'
import Coffice from "./coffice/coffice";
import Ielectrical from "./ielectrical/ielectrical";
import Wmarkup from "./wmarkup/wmarkup";
import Gmerchandish from "./gmerchandish/gmerchandish";
import Caccessories from "./caccessories/caccessories";
import Bproducts from "./bproducts/bproducts";
import Fbeverage from "./fbeverage/fbeverage";

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
                <NavLink to='/category/mcommunication'>手机通讯</NavLink >
              </li>
              <li>
                <NavLink to='/category/coffice'>电脑办公</NavLink >
              </li>
              <li>
                <NavLink to='/category/ielectrical'>智能家电</NavLink >
              </li>
              <li>
                <NavLink to='/category/wmarkup'>洗护美妆</NavLink >
              </li>
              <li>
                <NavLink to='/category/gmerchandish'>日用百货</NavLink >
              </li>
              <li>
                <NavLink to='/category/caccessories'>汽车用品</NavLink >
              </li>
              <li>
                <NavLink to='/category/bproducts'>母婴用品</NavLink >
              </li>
              <li>
                <NavLink to='/category/fbeverage'>食品酒水</NavLink >
              </li>
            </ul>
          </div>
          <div className='electro-wrapper'>
            <ul className='content' style={{height:'1500px'}}>
              <li>
                <Switch>
                  <Route path='/category/mcommunication'  component={Mcommunication}></Route>
                  <Route path='/category/coffice'  component={Coffice}></Route>
                  <Route path='/category/ielectrical'  component={Ielectrical}></Route>
                  <Route path='/category/wmarkup'  component={Wmarkup}></Route>
                  <Route path='/category/gmerchandish'  component={Gmerchandish}></Route>
                  <Route path='/category/caccessories'  component={Caccessories}></Route>
                  <Route path='/category/bproducts'  component={Bproducts}></Route>
                  <Route path='/category/fbeverage'  component={Fbeverage}></Route>
                </Switch>
              </li>
            </ul>

          </div>
        </div>
      </div>
    )
  }
}