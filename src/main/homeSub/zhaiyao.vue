<template>
	<div class='z-div'>
		<h1 class='z-title'>{{obj.title}}</h1>
		<p class='z-p'>
			<span>发布时间:{{obj.add_time | newdate}}</span>
			<span>点击:{{obj.click}}次</span>
		</p>
		<div class='z-zaiyao'>
			{{obj.zhaiyao}}
		</div>
		<comment-box></comment-box>
	</div>
</template>

<script>
	import comment from '../repetition/comment.vue'
	export default{
		data(){
			return {
				obj:{},
				id:this.$route.params.id
			}
		},
		methods:{
			show(){
				this.$axios.get('http://rap2.taobao.org:38080/app/mock/260858/journalism').then(res=>{
					let list=res.data.message
					let index = list.findIndex(item=>item.id == this.id)
					this.obj = list[index]
					console.log(this.obj)
				})
			}
		},
		created(){
			this.show()
		},
		components:{
			'comment-box':comment
		}
	}
</script>

<style lang="scss" scoped>
	.z-div{
		.z-title{
			font-size: 14px;
			color: red;
			font-weight: bold;
		}
		.z-p{
			font-size: 12px;
			display: flex;
			justify-content: space-between;
		}
		.z-zaiyao{
			border-top: 2px solid #5A6268;
			font-size: 13px;
			padding: 5px;
		}
		padding: 5px;
	}
</style>
