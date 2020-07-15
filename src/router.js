import VueRouter from 'vue-router'

import home from './main/home.vue'
import member from './main/member.vue'
import shopping from './main/shopping.vue'
import seek from './main/seek.vue'
import journalism from './main/homeSub/journalism.vue'
import zhaiyao from './main/homeSub/zhaiyao.vue'
import imageshare from './main/homeSub/imageshare.vue'
import imgageinfo from './main/repetition/imgageinfo.vue'
//3.创建路由对象
var routerobj = new VueRouter({
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/member',component:member},
		{path:'/shopping',component:shopping},
		{path:'/seek',component:seek},
		{path:'/home/journalism',component:journalism},
		{path:'/home/journalism/:id',component:zhaiyao},
		{path:'/home/imageshare',component:imageshare},
		{path:'/home/imageshare/imgageinfo/:id',component:imgageinfo}
	],
	linkActiveClass:'mui-active'
})
//向外暴露一个routerobj对象，让main接收
export default routerobj