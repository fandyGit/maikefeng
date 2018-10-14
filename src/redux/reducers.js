// import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG} from "./action-type";

const initUser = {
  username: '', // 用户名
  passwrd: '', // 用户密码
  isChecked:false,//是否记住密码
  msg: '', // 错误提示信息
  redirectTo: '' // 需要自动重定向的路由路径
}
export function user(state=initUser,action) {
  switch (action.type){
    case AUTH_SUCCESS:
      let redirectTo='/home'
      return {...action.data,redirectTo};
    case ERROR_MSG:
      return {...state,msg:action.data};
    default:
      return state;
  }
}
// export default combineReducers({
//   xxx,
//   yyy
// })