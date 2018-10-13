/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
//分类页地址
const BASE_URL_CATEGORY= 'http://www.51mkf.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id='
//发现页地址
const BASE_URL_FIND= 'http://www.51mkf.com/mobile/index.php?act=index&op=mendian_list&tp=mendian&aid='

// const BASE_URL = '/api'
//1分类页获取数据
export const reqCategory=(id)=>ajax(BASE_URL_CATEGORY+id)
//2发现页获取数据
export const reqFind=(id)=>ajax(BASE_URL_FIND+id)

