import React,{Component} from 'react'
import { WingBlank ,WhiteSpace} from 'antd-mobile';


import Banner from '../../components/banner/banner'
import NctouchNavHome from '../../components/nctouch-nav-home/nctouch-nav-home'
import './home.sass'

export default class Home extends Component{
  state={
    homeData:[],
    banners:[],
  }
  componentWillMount(){
    this.$http.get('http://www.51mkf.com/mobile/index.php?act=index').then(res=>{
      const result=res.data;
      console.log(result)
      if(result.code===200){
        this.setState({
          homeData:result.datas,
          banners:result.datas[0]['adv_list']['item']
        })
      }
    })
  }
  render(){
    const {banners}=this.state;
    return (
      <div>
        <Banner banners={banners}></Banner>
        <WingBlank>
          <div className='item-pic'>
            <a href="http://www.51mkf.com/wap/special_detail.html?special_id=170">
              <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05905806944492058.gif" alt=""/>
            </a>
          </div>
        </WingBlank>
        <NctouchNavHome></NctouchNavHome>

      </div>
    )
  }
}