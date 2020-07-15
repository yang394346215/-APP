import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routerobj from './router.js'

import app from './app.vue'

//导入bootstrap3
import 'bootstrap3/dist/css/bootstrap.css'
//导入mui
import './mui/css/mui.css'
import './mui/css/icons-extra.css'

//导入mintUI 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

import axios from 'axios'
Vue.prototype.$axios = axios

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//定义过滤器
Vue.filter('newdate',function(datastr){
	var a = new Date(datastr)
	var Y = a.getFullYear();
	var M = (a.getMonth()+1).toString().padStart(2,'0');
	var D = a.getDate().toString().padStart(2,'0');
	var h = a.getHours().toString().padStart(2,'0');
	var m = a.getMinutes().toString().padStart(2,'0');
	var s = a.getSeconds().toString().padStart(2,'0');
	return `${Y}-${M}-${D}  ${h}:${m}:${s}`
})

var vm = new Vue({
	el:'#app',
	render: c=>c(app),
	router:routerobj
})