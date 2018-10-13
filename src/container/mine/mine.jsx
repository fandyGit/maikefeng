import React,{Component} from 'react'
import { TabBar } from 'antd-mobile';

import MineHeader from '../../components/mine-header/mine-header'
import './mine.sass'

export default class Mine extends Component{
  state={
    mineNav:[
      {id:1,title:'商品收藏',path:'/shoucang',icon:'iconfont icon-shoucang'},
      {id:2,title:'店铺收藏',path:'/dianpu',icon:'iconfont icon-_mendian'},
      {id:3,title:'我的足迹',path:'/zuji',icon:'iconfont icon-wodezuji'},
    ],
  }
  render(){
    const {mineNav}=this.state;
    return (
      <div>
        <MineHeader></MineHeader>
        <section className='mine-nav'>
          <TabBar unselectedTintColor="#fff"
                  tintColor="#33A3F4"
                  barTintColor="rgba(0, 0, 0, 0.1)"
          >
            {
              mineNav.map((item,index)=>(
                <TabBar.Item title={item.title}
                             icon={<i className={item.icon}></i>}
                             selectedIcon={<i style={{color:'red'}} className={item.icon}></i>}
                             key={item.id}
                />
              ))
            }
          </TabBar>
          <div className='login-logo'>
              <i className='iconfont icon-denglu'></i>
              <span className='title'>点击登录</span>
          </div>
        </section>

      </div>
    )
  }
}