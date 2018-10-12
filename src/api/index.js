/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
const BASE_URL = 'http://www.51mkf.com/mobile/index.php?act=goods_class&op=get_child_all&gc_id='
// const BASE_URL = '/api'
export const reqCategory=(id)=>ajax(BASE_URL+id)

