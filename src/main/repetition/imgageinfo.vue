<template>
	<div>
		<div class='z-div'>
			<h1 class='z-title'>{{obj.title}}</h1>
			<p class='z-p'>
				<span>发布时间:{{obj.add_time | newdate}}</span>
				<span>点击:{{obj.click}}次</span>
			</p>
			
			<template>
			  <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
			</template>
			<div class='z-zaiyao'>
				{{obj.zhaiyao}}
			</div>
			<comment-box></comment-box>
		</div>
	</div>
</template>

<script>
	import comment from '../repetition/comment.vue'
	export default{
		data(){
			return{
				id:this.$route.params.id,
				obj:{},
				slide1: []
			}
		},
		methods:{
			show(){
				this.$axios.get("http://rap2.taobao.org:38080/app/mock/260858/image").then(res=>{
					let list=res.data.message
					let index = list.findIndex(item=>item.id == this.id)
					this.obj = list[index]
					console.log(this.obj)
					var sliobj = {
						src:this.obj.img_url,
						msrc:this.obj.img_url,
						alt: 'picture1',
						title: 'Image Caption 1',
						w: 400,
						h: 400
					}
					this.slide1.push(sliobj)
					this.slide1.push(sliobj)
				})
			},
			handleClose (){
			    console.log('close event')
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

<style lang="scss">
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
	
	.my-gallery {
	    display: flex;
	    flex-wrap: wrap;
	    figure {
	      width: 30%;
	      margin: 5px;
	      img {
	        width: 100%;
	      }
	    }
	  }
	
	
</style>
