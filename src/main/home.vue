<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for='aaa in list' :key='aaa.id'>
				<img :src="aaa.img" />
		  </mt-swipe-item>
		</mt-swipe>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/journalism">
					<img src="src/imgs/新闻资讯.png" alt="">
					<div class="mui-media-body">新闻资讯</div></router-link></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="src/imgs/图片分享.png" alt="">
					<div class="mui-media-body">图片分享</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="src/imgs/商品购买.png" alt="">
					<div class="mui-media-body">商品购买</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="src/imgs/留言反馈.png" alt="">
					<div class="mui-media-body">留言反馈</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="src/imgs/视频专区.png" alt="">
					<div class="mui-media-body">视频专区</div></a></li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
					<img src="src/imgs/联系我们.png" alt="">
					<div class="mui-media-body">联系我们</div></a></li>
			
		</ul> 
		
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	
	export default{
		data(){
			return {
				list:[]
			}
		},
		methods:{
			getHandle(){
			  this.$axios.get('http://rap2.taobao.org:38080/app/mock/260858/imgsrc').then((res)=>{
				  console.log(res.data.arr)
			    this.list=res.data.arr
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
