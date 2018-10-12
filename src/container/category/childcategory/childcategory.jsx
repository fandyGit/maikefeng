import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'

import { Grid } from 'antd-mobile';
import {reqCategory} from '../../../api/index'

class Childcategory extends Component{
  state={
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
    const {imgs,class_list}=this.state;
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

               {/* {
                  item.child.map(function(item1,index1){
                    return (
                      <div>
                        <img src={imgs[item1.gc_id]} alt=""/>
                        <p>{item1.gc_name}</p>
                      </div>
                    )
                  })
                }*/}

              </div>



            )
          })
        }
      </div>
    )
  }
}
export default withRouter(Childcategory)