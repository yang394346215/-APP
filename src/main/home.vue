<template>
	<div>
		<mt-swipe :auto="4000">
		  <mt-swipe-item></mt-swipe-item>
		  <mt-swipe-item></mt-swipe-item>
		  <mt-swipe-item></mt-swipe-item>
		</mt-swipe>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
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
		}
	}
</script>

<style scoped>
	.mint-swipe{
		height: 200px;
	}
	.mint-swipe-item:nth-child(1){
		background-color: red;
	}
	.mint-swipe-item:nth-child(2){
		background-color: yellow;
	}
	.mint-swipe-item:nth-child(3){
		background-color: blue;
	}
</style>
