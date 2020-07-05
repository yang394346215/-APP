import VueRouter from 'vue-router'

import home from './main/home.vue'
import member from './main/member.vue'
import shopping from './main/shopping.vue'
import seek from './main/seek.vue'
//3.创建路由对象
var routerobj = new VueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/member',component:member},
		{path:'/shopping',component:shopping},
		{path:'/seek',component:seek}
	]
})
//向外暴露一个routerobj对象，让main接收
export default routerobj