<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for='aaa in list' :key='aaa.id'>
				<img :src="aaa.img" />
		  </mt-swipe-item>
		</mt-swipe>
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
</style>
