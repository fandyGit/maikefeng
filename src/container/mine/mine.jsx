import React,{Component} from 'react'
import { TabBar ,WhiteSpace ,List,Flex} from 'antd-mobile';

import MineHeader from '../../components/mine-header/mine-header'
import './mine.sass'

const Item = List.Item;
const Brief = Item.Brief;


export default class Mine extends Component{
  state={
    mineNav:[
      {id:1,title:'商品收藏',path:'/shoucang',icon:'iconfont icon-shoucang'},
      {id:2,title:'店铺收藏',path:'/dianpu',icon:'iconfont icon-_mendian'},
      {id:3,title:'我的足迹',path:'/zuji',icon:'iconfont icon-wodezuji'},
    ],
    mineCenter:[
      {id:1,title:'待付款',path:'/fukuang',icon:'iconfont icon-fukuan'},
      {id:2,title:'代发货',path:'/fahuo',icon:'iconfont icon-daifahuo'},
      {id:3,title:'待收货',path:'/shouhuo',icon:'iconfont icon-daishouhuo'},
      {id:3,title:'待自提',path:'/ziti',icon:'iconfont icon-daiziti'},
      {id:3,title:'退款',path:'/tuikuan',icon:'iconfont icon-tuihuo'},
    ],
  }
  handleLogin=()=>{
    this.props.history.replace('/login')
  }
  handleRegister=()=>{
    this.props.history.replace('/register')
  }
  render(){
    const {mineNav,mineCenter}=this.state;
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
          <div className='login-logo' onClick={this.handleLogin}>
              <i className='iconfont icon-denglu'></i>
              <span className='title'>点击登录</span>
          </div>
        </section>
        <section className='mine-center'>
          <WhiteSpace/>
          <List className="my-list">
            <Item arrow="horizontal" multipleLine onClick={() => {}}>
              我的订单
            </Item>
            <Item>
              <Flex>
                {
                  mineCenter.map((item,index)=>{
                    return (
                      <Flex.Item style={{textAlign:'center'}}>
                          <i style={{display:'block',fontSize:'20px'}} className={item.icon}></i>
                          <span>{item.title}</span>
                      </Flex.Item>
                    )
                  })
                }
              </Flex>
            </Item>
            <Item arrow="horizontal" multipleLine onClick={() => {}}>
              <i className='iconfont icon-wodecaichan'></i>
              我的财产
            </Item>
            <Item arrow="horizontal" multipleLine onClick={() => {}}>
              <i className='iconfont icon-shouhuodizhiguanli'></i>
              收货地址管理
            </Item>
            <Item arrow="horizontal" multipleLine onClick={() => {}}>
              <i className='iconfont icon-shezhi'></i>
              用户设置
            </Item>
            <Item>
              <Flex>
                <Flex.Item style={{textAlign:'center'}} onClick={this.handleLogin}>
                  <span>登录</span>
                </Flex.Item>
                <Flex.Item style={{textAlign:'center'}} onClick={this.handleRegister}>
                  <span>注册</span>
                </Flex.Item>
                <Flex.Item style={{textAlign:'center'}}>
                  <span>反馈</span>
                </Flex.Item>
                <Flex.Item style={{textAlign:'center'}}>
                  <span>返回顶部</span>
                </Flex.Item>
              </Flex>
            </Item>
          </List>
        </section>
      </div>
    )
  }
}