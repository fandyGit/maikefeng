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
          <div className='login-logo'>
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
                <Flex.Item style={{textAlign:'center'}}>
                  <span>登录</span>
                </Flex.Item>
                <Flex.Item style={{textAlign:'center'}}>
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
         {/* <List renderHeader={() => 'Customized Right Side（Empty Content / Text / Image）'} className="my-list">
            <Item>Title</Item>
            <Item arrow="horizontal" onClick={() => {}}>Title</Item>
            <Item extra="extra content" arrow="horizontal" onClick={() => {}}>Title</Item>
            <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
              Title <Brief>subtitle</Brief>
            </Item>
          </List>
          <List renderHeader={() => 'Align Vertical Center'} className="my-list">
            <Item multipleLine extra="extra content">
              Title <Brief>subtitle</Brief>
            </Item>
          </List>
          <List renderHeader={() => 'Icon in the left'}>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >My wallet</Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
              My Cost Ratio
            </Item>
          </List>
          <List renderHeader={() => 'Text Wrapping'} className="my-list">
            <Item data-seed="logId">Single line，long text will be hidden with ellipsis；</Item>
            <Item wrap>Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text</Item>
            <Item extra="extra content" multipleLine align="top" wrap>
              Multiple line and long text will wrap. Long Text Long Text Long Text
            </Item>
            <Item extra="no arrow" arrow="empty" className="spe" wrap>
              In rare cases, the text of right side will wrap in the single line with long text. long text long text long text
            </Item>
          </List>
          <List renderHeader={() => 'Other'} className="my-list">
            <Item disabled={this.state.disabled} extra="" onClick={() => { console.log('click', this.state.disabled); this.setState({ disabled: true }); }}>Click to disable</Item>
            <Item>
              <select defaultValue="1">
                <option value="1">Html select element</option>
                <option value="2" disabled>Unable to select</option>
                <option value="3">option 3</option>
              </select>
            </Item>
          </List>*/}
        </section>

      </div>
    )
  }
}