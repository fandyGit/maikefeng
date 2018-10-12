import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

import { Grid } from 'antd-mobile';
import {reqCategory} from '../../../api/index'

class Childcategory extends Component{
  state={
    default_imgs:[
      {
        gc_id:214,
        title:'苹果',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/01.pingguo.jpg'
      },
      {
        gc_id:371,
        title:'华为',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/02.huawei.jpg'
      },
      {
        gc_id:370,
        title:'荣耀',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/03.rongyao.jpg'
      },
      {
        gc_id:367,
        title:'小米',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/04.xiaomi.jpg'
      },
      {
        gc_id:368,
        title:'魅族',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/05.meizu.jpg'
      },
      {
        gc_id:365,
        title:'oppo',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/06.oppo.jpg'
      },
      {
        gc_id:366,
        title:'vivo',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/07.vivo.jpg'
      },
      {
        gc_id:208,
        title:'三星',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/08.sanxing.jpg'
      },
      {
        gc_id:212,
        title:'诺基亚',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/09.nuojiya.jpg'
      },
      {
        gc_id:378,
        title:'美图',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/10.meitu.jpg'
      },
      {
        gc_id:372,
        title:'360',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/11.360.jpg'
      },
      {
        gc_id:391,
        title:'乐视',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/12.leshi.jpg'
      },
      {
        gc_id:369,
        title:'酷派',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/13.kupai.jpg'
      },
      {
        gc_id:375,
        title:'中兴',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/14.zhongxing.jpg'
      },
      {
        gc_id:373,
        title:'一加',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/15.yijia.jpg'
      },
      {
        gc_id:374,
        title:'锤子',
        url:'http://www.51mkf.com/app/img/fenlei/mobile/16.chuizi.jpg'
      },
    ],
    imgs:{},
    class_list:[],
  }
  componentWillMount(){
    const id=this.props.match.params.id;
    reqCategory(id).then(res=>{
     this.setState({
       imgs:res.datas['img'],
       class_list:res.datas['class_list'],
     })
    });
  }
  componentWillReceiveProps(nextProps){
    const id=nextProps.match.params.id;
    reqCategory(id).then(res=>{
      this.setState({
        imgs:res.datas.img,
        class_list:res.datas['class_list'],
      })
    });
  }
  render(){
    const {imgs,class_list,default_imgs}=this.state;
    if(this.props.location.pathname==='/category/childcategory/11'){
      return (
        <Grid data={default_imgs}
              renderItem={items=>(
                <div style={{ padding: '12.5px' }}>
                  <a href={`http://www.51mkf.com/wap/tmpl/product_list.html?b_id=${items.gc_id}`}>
                    <img src={items.url} style={{ width: '55px', height: '55px' }} alt="" />
                  </a>
                  <div style={{ color: '#888', fontSize: '14px',}}>
                    <span style={{fontSize:'12px'}}>{items.title}</span>
                  </div>
                </div>
              )}
              columnNum={3}/>
      )
    }else{
      return (
        <div>
          {/*根据传递过来的id的值，请求获取数据渲染页面*/}
          {
            this.state.class_list.map((item,index)=>{
              return (
                <div key={index}>
                  <a style={{display:'block',height:'30px',lineHeight:'30px',backgroundColor:'#666',color:'#fff'}}
                     href={`http://www.51mkf.com/wap/tmpl/product_list.html?gc_id=${item.gc_id}`}>
                    <span style={{paddingLeft:'20px'}}>{item.gc_name}</span>
                    <i style={{float:'right',paddingRight:'20PX'}}>&gt;</i>
                  </a>
                  <Grid data={item.child}
                        renderItem={items=>(
                          <div style={{ padding: '12.5px' }}>
                            <a href={`http://www.51mkf.com/wap/tmpl/product_list.html?gc_id=${items.gc_id}`}>
                              <img src={imgs[items.gc_id]} style={{ width: '40px', height: '40px' }} alt="" />
                            </a>
                            <div style={{ color: '#888', fontSize: '14px', marginTop: '2px' }}>
                              <span style={{fontSize:'12px'}}>{items.gc_name}</span>
                            </div>
                          </div>
                        )}
                        columnNum={3}/>
                </div>
              )
            })
          }
        </div>
      )
    }

  }
}
export default withRouter(Childcategory)