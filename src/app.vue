<template>
	<div class='outer'>
		<mt-header fixed title="固定在顶部"></mt-header>
		<h1>123</h1>
		<mt-tabbar v-model="selected" fixed>
			<mt-tab-item id="首页">
				<img slot="icon" src="src/imgs/首页.png">
				首页
			</mt-tab-item>
			<mt-tab-item id="下载">
				<img slot="icon" src="src/imgs/下载.png">
				下载
			</mt-tab-item>
			<mt-tab-item id="发现">
				<img slot="icon" src="src/imgs/发现.png">
				发现
			</mt-tab-item>    
			<mt-tab-item id="想看">
				<img slot="icon" src="src/imgs/想看.png">
				想看
			</mt-tab-item>
		 </mt-tabbar>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				selected:'aaa'
			}
		},
		methods:{
			show(){
				console.log('fang.vue里面的方法')
			}
		},
		watch: {
		      selected: function (val, oldVal) {
		        console.log(val)
		        // click后打印出当前mt-tab-item的id
		      }
		    }
	}
</script>

<style scoped>
	.outer{
		
	}
</style>
