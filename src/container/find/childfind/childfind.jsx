import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

import {  Card, WhiteSpace  } from 'antd-mobile';
import {reqFind} from '../../../api/index'
import './childfind.sass'

class ChildFind extends Component{
  state={
    allCity:{},
    currentCity:{},

  }
  componentWillMount(){
    const id='';
    reqFind(id).then(res=>{
     this.setState({
       allCity:res.datas['mendian_list'],
     })
      // console.log(res)
    });
  }
  componentWillReceiveProps(nextProps){
    const aid=nextProps.match.params.aid;
    console.log(aid)
    reqFind(aid).then(res=>{
      this.setState({
        currentCity:res.datas['mendian_list'],
      })
      // console.log(res)
    });
  }
  render(){
    /*const {imgs,class_list,default_imgs}=this.state;
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
          {/!*根据传递过来的id的值，请求获取数据渲染页面*!/}
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
    }*/
    const {allCity,currentCity}=this.state;
    if(this.props.location.pathname==='/find/childfind/0'){
      return (
        <div>
          {
            Object.keys(allCity).map(key=>{
              return (
                <div key={key}>
                  <p style={{height:'40px',fontSize:'20px',lineHeight:'40px',background:'rgb(241, 236, 243)',paddingLeft:'20px'}}>{allCity[key]['area_name']}</p>
                  {
                    allCity[key]['list'].map(function(item,index){
                      return (
                        <div key={index}>
                          <WhiteSpace size="lg" />
                          <Card>
                            <Card.Header
                              title={item.area_info}
                              thumb={<i style={{color:'red',fontSize:'30px',paddingRight:'5px'}} className='iconfont icon-dizhi'></i>}
                              extra={<span>&gt;</span>}
                            />
                            <Card.Body>
                              <div>
                                <a href={`http://www.51mkf.com/wap/tmpl/chain_product.html?chain_id=${item.chain_id}`}>
                                  <i style={{color:'red',fontSize:'30px',paddingRight:'5px'}} className='iconfont icon-_mendian'></i>
                                  <span style={{fontSize:'18px',color:'rgb(199, 5, 102)'}}>{item.chain_name}</span>
                                </a>
                              </div>
                            </Card.Body>
                            <Card.Footer content={item.chain_address}/>
                          </Card>
                          <WhiteSpace size="lg" />
                        </div>
                      )

                    })
                  }

                </div>
              )
            })
          }
        </div>
      )
    }else{
      return (
        <div>
          {
            Object.keys(currentCity).map(key=>{
              return (
                <div key={key}>
                  <p style={{height:'40px',fontSize:'20px',lineHeight:'40px',background:'rgb(241, 236, 243)',paddingLeft:'20px'}}>{allCity[key]['area_name']}</p>
                  {
                    currentCity[key]['list'].map(function(item,index){
                      return (
                        <div key={index}>
                          <WhiteSpace size="lg" />
                          <Card>
                            <Card.Header
                              title={item.area_info}
                              thumb={<i style={{color:'red',fontSize:'30px',paddingRight:'5px'}} className='iconfont icon-dizhi'></i>}
                              extra={<span>&gt;</span>}
                            />
                            <Card.Body>
                              <div>
                                <a href={`http://www.51mkf.com/wap/tmpl/chain_product.html?chain_id=${item.chain_id}`}>
                                  <i style={{color:'red',fontSize:'30px',paddingRight:'5px'}} className='iconfont icon-_mendian'></i>
                                  <span style={{fontSize:'18px',color:'rgb(199, 5, 102)'}}>{item.chain_name}</span>
                                </a>
                              </div>
                            </Card.Body>
                            <Card.Footer content={item.chain_address}/>
                          </Card>
                          <WhiteSpace size="lg" />
                        </div>
                      )

                    })
                  }

                </div>
              )
            })
          }
        </div>
      )

    }
  }
}
export default withRouter(ChildFind)