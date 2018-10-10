import React,{Component} from 'react'
import { WingBlank ,WhiteSpace} from 'antd-mobile';


import Banner from '../../components/banner/banner'
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
    let banners=this.state.homeData[0];
    let banner

    if(banners!==undefined){
      for(var ban in banners){
        banner=banners[ban]
      }
    }
    console.log(banner)
    return (
      <div>
        <Banner banner={banner}></Banner>
        <WingBlank>
          <div className='item-pic'>
            <a href="http://www.51mkf.com/wap/special_detail.html?special_id=170">
              <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05905806944492058.gif" alt=""/>
            </a>
          </div>
        </WingBlank>

      </div>
    )
  }
}