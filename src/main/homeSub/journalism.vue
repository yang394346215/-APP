<template>
	<div>
	<ul class="mui-table-view" v-for="aaa in list" :key="aaa.id">
		<li class="mui-table-view-cell mui-media">
			<router-link :to="'/home/journalism/' + aaa.id">
				<img class="mui-media-object mui-pull-left" :src="aaa.img_url">
				<div class="mui-media-body">
					<h1>{{aaa.title}}</h1>
					<p class='mui-ellipsis'>
						<span>{{aaa.add_time | newdate}}</span>
						<span>点击:{{aaa.click}}次</span>
					</p>
				</div>
			</router-link>
		</li>
		
	</ul>
	</div>
</template>

<script>
export default{
	data(){
		return {
			list:[]
		}
	},
	methods:{
		show(){
			this.$axios.get('http://rap2.taobao.org:38080/app/mock/260858/journalism').then(res=>{
				console.log(res.data)
				this.list=res.data.message
			})
		}
	},
	created(){
		this.show()
	}
}
</script>

<style lang='scss' scoped>
	.mui-table-view{
		h1{
			font-size: 14px;
		}
		.mui-ellipsis{
			font-size: 12px;
			color: #0062CC;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
