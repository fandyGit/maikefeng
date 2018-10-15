import React,{Component} from 'react'
import BScroll from 'better-scroll'
import Banner from '../../components/banner/banner'

import NavHeader from '../../components/navheader/navheader'
import NctouchNavHome from '../../components/nctouch-nav-home/nctouch-nav-home'
import Layoutc from '../../components/nctouch-home-layout/layoutc/layoutc'
import Layoute from '../../components/nctouch-home-layout/layoute/layoute'
import Layoutf from '../../components/nctouch-home-layout/layoutf/layoutf'
import Layoutg from '../../components/nctouch-home-layout/layoutg/layoutg'
import Layouth from '../../components/nctouch-home-layout/layouth/layouth'
import Layouti from '../../components/nctouch-home-layout/layouti/layouti'
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
    layouth1:[],//公司logo
    layouth2:[],//公司logo
    layouth3:[],//公司logo
    layouti:[],//热门手机
    layouti1:[],//电脑办公
    layouti2:[],//配件专场
    layouti3:[],//配件专场
    layouti4:[],//智能家电
    layouti5:[],//食品酒水
    layouti6:[],//母婴专区
    layouti7:[],//日用百货
    layouti8:[],//美妆洗护
    layouti9:[],//汽车用品

  }
  componentWillMount(){
    this.$http.get('http://www.51mkf.com/mobile/index.php?act=index').then(res=>{
      const result=res.data;
      if(result.code===200){
        this.setState({
          homeData:result.datas,
          banners:result.datas[0]['adv_list']['item'],
          layoutc:result.datas[2]['home3']['item'],
          layoutd:result.datas[3]['home3']['item'],
          layoute:result.datas[5]['home5']['item'],
          layoutf:result.datas[9]['home5']['item'],
          layoutg:result.datas[10]['home3']['item'],
          layouth1:result.datas[13]['home5']['item'],//公司logo
          layouth2:result.datas[14]['home5']['item'],//公司logo
          layouth3:result.datas[15]['home5']['item'],//公司logo
          layouti:result.datas[18]['goods']['item'],//热门手机
          layouti1:result.datas[21]['goods']['item'],//电脑办公
          layouti2:result.datas[24]['home3']['item'],//配件专场
          layouti3:result.datas[25]['goods']['item'],//配件专场
          layouti4:result.datas[28]['goods']['item'],//智能家电
          layouti5:result.datas[31]['goods']['item'],//食品酒水
          layouti6:result.datas[34]['goods']['item'],//母婴专区
          layouti7:result.datas[37]['goods']['item'],//日用百货
          layouti8:result.datas[40]['goods']['item'],//美妆洗护
          layouti9:result.datas[43]['goods']['item'],//汽车用品
        })
      }
    })
  }
  componentDidMount(){
    //可以滑到底部，但是
    // 1必须等到全部加载完才可以滑动，
    // 2切换路由回来滑动不了
    window.onload=function(){
      let scroll = new BScroll('.wrapper',{
        scrollY: true,//垂直滑动
        click: true,//可以点击
        pullDownRefresh: true
      })
    }
    //vue中vm.$nextTick
    //切换回来可以滑动到底部
    //1不可以滑到底部，会在某一个点卡住
    setTimeout(()=>{
      let scroll = new BScroll('.wrapper',{
        scrollY: true,//垂直滑动
        click: true,//可以点击
        pullDownRefresh: true
      })
    },1000)//单独使用延时定时器的时候,延时小于12秒就会有问题

  }
  render(){
    const {
      banners,layoutc,layoutd,layoute,layoutf,layoutg,layouth1,
      layouth2,layouth3,layouti,layouti1,layouti2,layouti3,layouti4,
      layouti5,layouti6,layouti7,layouti8,layouti9
    }=this.state;
    return (
      <div>
        <NavHeader></NavHeader>
        <div className='wrapper'>
          <ul className='content'>
            {/*轮播图*/}
            <li>
              <Banner banners={banners}></Banner>
            </li>
            {/*动态广告展现图*/}
            <li>
              <div className='item-pic'>
                <a href="http://www.51mkf.com/wap/special_detail.html?special_id=170">
                  <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05905806944492058.gif" alt=""/>
                </a>
              </div>
            </li>
            {/*列表的分页跳转*/}
            <li>
              <NctouchNavHome></NctouchNavHome>
            </li>
            {/*列表分类，华硕,双肩包部分*/}
            <li>
              <Layoutc layoutc={layoutc}
                       layoutd={layoutd}
              />
            </li>
            {/*京心造物大图，枕头部分*/}
            <li>
              <div className='item-pic'>
                  <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05895432640695894.png" alt=""/>
              </div>
              <Layoute layoute={layoute}></Layoute>
            </li>
            {/*热门专区部分*/}
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
            {/*蓝月亮部分*/}
            <li>
              <Layoutg layoutg={layoutg}></Layoutg>
              <div className='lan'>
                <a href="http://www.51mkf.com/wap/tmpl/product_detail.html?goods_id=104286">
                  <img src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05830013804286036.png" alt=""/>
                </a>
              </div>
            </li>
            {/*公司logo品牌墙*/}
            <li>
              <img className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05872427367680592.jpg" alt=""/>

              <Layouth layouth1={layouth1} layouth2={layouth2} layouth3={layouth3}/>
            </li>
            {/*R17热门手机*/}
            <li>
              <a style={{display:'block',height:'125px'}} href="http://www.51mkf.com/wap/tmpl/product_detail.html?goods_id=119856">
                <img style={{display:'block',height:'125px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05893733429399139.png" alt=""/>
              </a>
              <img style={{display:'block',height:'43px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05506778612994991.png" alt=""/>
              <Layouti layouti={layouti}></Layouti>
            </li>
            {/*电脑办公*/}
            <li>
              <img style={{display:'block',height:'43px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05839307525338060.jpg" alt=""/>
              <a style={{display:'block',height:'125px'}} href="http://www.51mkf.com/wap/tmpl/product_detail.html?goods_id=1232">
                <img style={{display:'block',height:'125px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05839425773470935.png" alt=""/>
              </a>
              <Layouti layouti={layouti1}></Layouti>
            </li>
            {/*配件专场*/}
            <li>
              <img style={{display:'block',height:'43px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05506778923821440.png" alt=""/>
              <a style={{display:'block',height:'125px'}} href="http://www.51mkf.com/shop/cate-1367-0-0-0-0-0-0-0-0-0-0.html">
                <img style={{display:'block',height:'125px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05839476044017318.png" alt=""/>
              </a>
              <Layoutg layoutg={layouti2}></Layoutg>
              <Layouti layouti={layouti3}></Layouti>
            </li>
            {/*智能家电*/}
            <li>
              <img style={{display:'block',height:'43px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05839308178081626.jpg" alt=""/>
              <a style={{display:'block',height:'125px'}} href="http://www.51mkf.com/wap/tmpl/product_list.html?gc_id=308">
                <img style={{display:'block',height:'125px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05838689685369372.jpg" alt=""/>
              </a>
              <Layouti layouti={layouti4}></Layouti>
            </li>
            {/*食品酒水*/}
            <li>
              <img style={{display:'block',height:'43px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05838673160278051.jpg" alt=""/>
              <a style={{display:'block',height:'125px'}} href="###">
                <img style={{display:'block',height:'125px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05836077577695982.jpg" alt=""/>
              </a>
              <Layouti layouti={layouti5}></Layouti>
            </li>
            {/*母婴专区*/}
            <li>
              <img style={{display:'block',height:'43px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05838678458402596.jpg" alt=""/>
              <a style={{display:'block',height:'125px'}} href="###">
                <img style={{display:'block',height:'125px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05836086931444959.jpg" alt=""/>
              </a>
              <Layouti layouti={layouti6}></Layouti>
            </li>
            {/*日用百货*/}
            <li>
              <img style={{display:'block',height:'43px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05838683108844319.jpg" alt=""/>
              <a style={{display:'block',height:'125px'}} href="###">
                <img style={{display:'block',height:'125px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05838681771514960.jpg" alt=""/>
              </a>
              <Layouti layouti={layouti7}></Layouti>
            </li>
            {/*美妆洗护*/}
            <li>
              <img style={{display:'block',height:'43px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05838687433969375.jpg" alt=""/>
              <a style={{display:'block',height:'125px'}} href="http://www.51mkf.com/shop/cate-1184-0-0-0-0-0-0-0-0-0-0.html">
                <img style={{display:'block',height:'125px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05838686749233969.jpg" alt=""/>
              </a>
              <Layouti layouti={layouti8}></Layouti>
            </li>
            {/*汽车用品*/}
            <li>
              <img style={{display:'block',height:'43px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05838697778310141.jpg" alt=""/>
              <a style={{display:'block',height:'125px'}} href="##">
                <img style={{display:'block',height:'125px'}} className='layout-f' src="http://www.51mkf.com/data/upload/mobile/special/s0/s0_05838691647784126.jpg" alt=""/>
              </a>
              <Layouti layouti={layouti9}></Layouti>
            </li>
          </ul>
        </div>
      </div>

    )
  }
}