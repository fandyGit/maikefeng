import {AUTH_SUCCESS,ERROR_MSG} from "./action-type";


//同步action,授权登录成功
export const authSuccess=(users)=>({type:AUTH_SUCCESS,data:users})
export const sendMsg=(msg)=>({type:ERROR_MSG,data:msg})


export const getLogin=(users)=>{
  const {username,password,isChecked}=users;
  console.log(username,password,isChecked)
  if(username==='luhuan'&&password==='123'){
    return dispatch=>{
      dispatch(authSuccess(users))
    }
  }else{
    console.log('999')
    return dispatch=>{
      dispatch(sendMsg('用户名密码错误!'))
    }
  }

}