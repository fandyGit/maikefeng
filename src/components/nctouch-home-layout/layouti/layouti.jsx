import React,{Component} from 'react'
import { Flex} from 'antd-mobile';

export default class Layouti extends Component{
  render(){
    const {layouti}=this.props;
    return (
      <div>
        <Flex direction='row'
              className='flex-container-home3'
              wrap='wrap'
        >
          {
            this.props.layouti.map((item,index)=>{
              return (
                <a style={{display:'inline-block',paddingBottom:'8px',marginBottom:'5px'}} href={`http://www.51mkf.com/wap/tmpl/product_detail.html?goods_id=${item.goods_id}`} key={index}>

                    <img className='pic' src={item.goods_image} alt=""/>

                  <i className='shengyuehao'  style={{margin:'10px',fontSize:'12px',color:'#333',borderBottom:1}} >{item.goods_name||item.data}</i>
                  <i className="shengyuehao" style={{margin:'5px',color:'red'}} >售价：￥{item.goods_price}</i>
                </a>
              )
            })
          }
        </Flex>
      </div>
    )
  }
}