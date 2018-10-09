#程序开发记录
##1开发环境搭建  使用react脚手架搭建
###1.1引入移动端适配
	<meta name="viewport" content="width=device-width,
	initial-scale=1, maximum-scale=1, minimum-scale=1,
	 user-scalable=no" />
###1.2解决移动端快速点击延迟的问题
	<script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
###1.3解决IE版本兼容问题
	<script>
	if ('addEventListener' in document) {
	  document.addEventListener('DOMContentLoaded', function() {
	    FastClick.attach(document.body);
	  }, false);
	}
	if(!window.Promise) {
	  document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
	}
	</script>  ##2css样式使用sass  node-saas sass-loader
##3UI库使用 andt-mobile andt-mobile
实现按需加载
	npm install --save-dev babel-plugin-import react-app-rewired
	修改package.json
	"scripts": {
	    "start": "react-app-rewired start",
	    "build": "react-app-rewired build",
	    "test": "react-app-rewired test --env=jsdom",
	    "eject": "react-app-rewired eject"
	  },
##4状态管理使用redux管理 redux
	actions
	action-type
	reducers
	import {combineReducers} from 'redux'
	store
	import {createStore,applyMiddleware} from 'redux'
	import thunk from 'redux-thunk'
	import {composeWithDevTools} from 'redux-devtools-extension'
	import reducers from './reducers'

##5连接react与redux使用 react-redux
	import {Provider} from 'react-redux'
##6引入路由组件
	import {Switch,HashRouter,Route...} from 'react-router-dom'

