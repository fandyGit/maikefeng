import React,{Component} from 'react'
import BScroll from 'better-scroll'
import Banner from '../../components/banner/banner'
import NctouchNavHome from '../../components/nctouch-nav-home/nctouch-nav-home'
import Layoutc from '../../components/nctouch-home-layout/layoutc/layoutc'
import Layoute from '../../components/nctouch-home-layout/layoute/layoute'
import Layoutf from '../../components/nctouch-home-layout/layoutf/layoutf'
import Layoutg from '../../components/nctouch-home-layout/layoutg/layoutg'
import Layouth from '../../components/nctouch-home-layout/layouth/layouth'
import './home.sass'

export default class Home extends Component{
  state={
    homeData:[],
    banners:[],
    layoutc:[],
    layoutd:[],
    layoute:[],
    layoutf:[],
    layoutg:[],
    layouth1:[],
    layouth2:[],
    layouth3:[],
  }
  componentWillMount(){
    this.$http.get('http://www.51mkf.com/mobile/index.php?act=index').then(res=>{
      const result=res.data;
      console.log(result)
      if(result.code===200){
        this.setState({
          homeData:result.datas,
          banners:result.datas[0]['adv_list']['item'],
          layoutc:result.datas[2]['home3']['item'],
          layoutd:result.datas[3]['home3']['item'],
          layoute:result.datas[5]['home5']['item'],
          layoutf:result.datas[9]['home5']['item'],
          layoutg:result.datas[10]['home3']['item'],
          layouth1:result.datas[13]['home5']['item'],
          layouth2:result.datas[14]['home5']['item'],
          layouth3:result.datas[15]['home5']['item'],
        })
      }
    })
  }
  componentDidMount(){
    let scroll = new BScroll('.wrapper',{
      scrollY: true,
      click: true
    })
  }
  render(){
    const {banners,layoutc,layoutd,
      layoute,layoutf,layoutg,layouth1,layouth2,layouth3}=this.state;
    return (
      <div>
        <div className='wrapper'>
          <ul className='content'>
            <li>
              <Banner banners={banners}></Banner>
            </li>
            <li>
              <div className='item-pic'>
                <a href="http://www.51mkf.com/wap/special_detail.html?special_id=170">
                  <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05905806944492058.gif" alt=""/>
                </a>
              </div>
            </li>
            <li>
              <NctouchNavHome></NctouchNavHome>
            </li>
            <li>
              <Layoutc layoutc={layoutc}
                       layoutd={layoutd}
              />
            </li>
            <li>
              <div className='item-pic'>
                  <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05895432640695894.png" alt=""/>
              </div>
              <Layoute layoute={layoute}></Layoute>
            </li>
            <li>
              <img className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05872427174157909.jpg" alt=""/>
              <div>
                <div className='lf-left'>
                  <a href="http://www.51mkf.com/wap/tmpl/product_detail.html?goods_id=112037">
                    <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05912720194905352.jpg" alt=""/>
                  </a>
                </div>
                <ul className='lf-right'>
                  <li>
                    <a href="http://www.51mkf.com/wap/tmpl/product_detail.html?goods_id=115453">
                      <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05841867271206667.jpg" alt=""/>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.51mkf.com/wap/tmpl/product_detail.html?goods_id=104740">
                      <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05844442763109066.jpg" alt=""/>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Layoutf layoutf={layoutf}></Layoutf>
            </li>
            <li>
              <Layoutg layoutg={layoutg}></Layoutg>
              <div className='lan'>
                <a href="http://www.51mkf.com/wap/tmpl/product_detail.html?goods_id=104286">
                  <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05830013804286036.png" alt=""/>
                </a>
              </div>
            </li>
            <li>
              <img className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05872427367680592.jpg" alt=""/>
             {/*公司logo品牌墙*/}
              <Layouth layouth1={layouth1} layouth2={layouth2} layouth3={layouth3}/>
            </li>
          </ul>
        </div>
      </div>

    )
  }
}