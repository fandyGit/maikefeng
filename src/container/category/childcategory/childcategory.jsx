import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {reqCategory} from '../../../api/index'

class Childcategory extends Component{
  componentWillMount(){
    const id=this.props.match.params.id;
    reqCategory(id).then(result=>{
      console.log(result)
    });
  }
  componentWillReceiveProps(nextProps){
    const id=nextProps.match.params.id;
    reqCategory(id).then(res=>{
      console.log(res)
    });
  }
  render(){
    return (
      <div>
       {/*根据传递过来的id的值，请求获取数据渲染页面*/}
      </div>
    )
  }
}
export default withRouter(Childcategory)