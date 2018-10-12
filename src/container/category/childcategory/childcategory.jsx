import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
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
       class_list:res.datas['class_list']
     })
    });
  }
  componentWillReceiveProps(nextProps){
    const id=nextProps.match.params.id;
    reqCategory(id).then(res=>{
      this.setState({
        imgs:res.datas.img,
        class_list:res.datas['class_list']
      })
    });
  }
  render(){
    // console.log(this.state['class_list'])
    // console.log(this.state.imgs)
    return (
      <div>
       {/*根据传递过来的id的值，请求获取数据渲染页面*/}
      </div>
    )
  }
}
export default withRouter(Childcategory)