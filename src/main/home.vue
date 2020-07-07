<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for='aaa in list' :key='aaa.id'>
				<img :src="aaa.img" />
		  </mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="src/imgs/分析趋势.png" alt="">
					<div class="mui-media-body">分析趋势</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="src/imgs/健康安全.png" alt="">
					<div class="mui-media-body">健康安全</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="src/imgs/列表清单.png" alt="">
					<div class="mui-media-body">列表清单</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="src/imgs/项目.png" alt="">
					<div class="mui-media-body">项目</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="src/imgs/消息群组.png" alt="">
					<div class="mui-media-body">消息群组</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="src/imgs/周报.png" alt="">
					<div class="mui-media-body">周报</div></a></li>
			
		</ul> 
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import axios from 'axios';
	export default{
		data(){
			return {
				list:[]
			}
		},
		methods:{
			getHandle(){
			  axios.get('http://127.0.0.1:8081/123',{
			     params:{},
			    headers:{}
			  })
			  .then(res=>{
				  this.list=res.data
				  return console.log(res.data)
				})
			}
		},
		created(){
			this.getHandle();
		}
	}
</script>

<style scoped>
	.mint-swipe{
		height: 200px;
	}
	
	.mint-swipe-item img{
		width: 100%;
		height: 100%;
	}
	.mui-grid-view.mui-grid-9{
		background-color: #ffffff;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border: 0;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell img{
		width: 50px;
		height: 50px;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell div{
		font-size: 13px;
	}
</style>
