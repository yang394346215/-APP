import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routerobj from './router.js'

import app from './app.vue'

//导入bootstrap3
import 'bootstrap3/dist/css/bootstrap.css'

//导入mintUI 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

var vm = new Vue({
	el:'#app',
	render: c=>c(app),
	router:routerobj
})