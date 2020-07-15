<template>
	<div>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">展示一</mt-tab-item>
		  <mt-tab-item id="2">展示二</mt-tab-item>
		  <mt-tab-item id="3">展示三</mt-tab-item>
		</mt-navbar>
		<mt-tab-container v-model="selected" swipeable>
		  <mt-tab-container-item id="1">
		    <ul class="img-class">
		      <router-link v-for="n in imglist" :key="n.id" :to="'/home/imageshare/imgageinfo/'+n.id" tag="li">
		        <img v-lazy="n.img_url" >
				<div class="info">
					<div class="info_title">{{n.title}}</div>
					<div class="info_zhaiyao">{{n.zhaiyao}}</div>
				</div>
		      </router-link>
		    </ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <ul class="img-class">
		      <router-link v-for="n in imglist" :key="n.id" :to="'/home/imageshare/imgageinfo/'+n.id" tag="li">
		        <img v-lazy="n.img_url" >
				<div class="info">
					<div class="info_title">{{n.title}}</div>
					<div class="info_zhaiyao">{{n.zhaiyao}}</div>
				</div>
		      </router-link>
		    </ul>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <ul class="img-class">
		      <router-link v-for="n in imglist" :key="n.id" :to="'/home/imageshare/imgageinfo/'+n.id" tag="li">
		        <img v-lazy="n.img_url" >
				<div class="info">
					<div class="info_title">{{n.title}}</div>
					<div class="info_zhaiyao">{{n.zhaiyao}}</div>
				</div>
		      </router-link>
		    </ul>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>

<script>
	import { Lazyload } from 'mint-ui';
	
	export default{
		data(){
			return {
				selected:'1',
				active:'tab-container1',
				imglist:[]
			}
		},
		methods:{
			show(){
				this.$axios.get("http://rap2.taobao.org:38080/app/mock/260858/image").then(res=>{
					console.log(res.data.message)
					this.imglist=res.data.message
				})
			}
		},
		created(){
			this.show()
		}
		
	}
</script>

<style lang='scss' scoped>
	.img-class{
		list-style: none;
		padding: 0px;
		margin: 0px;
		li{
			background-color: #ccc;
			text-align: center;
			margin: 10px;
			position: relative;
			img{
				width: 100%;
				height: 100%;
				box-shadow: 0 0 6px #999;
			}
			img[lazy=loading] {
			  width: 40px;
			  height: 40px;
			  margin: auto;
			}
		}
		
	}
	.info{
		width: 100%;
		color: #ffffff;
		text-align: left;
		height: 80px;
		background-color: rgba(0,0,0,0.4);
		position: absolute;
		bottom: 0;
		padding: 0 5px;
		.info_title{
			font-weight: bold;
			font-size: 16px;
			
		}
		.info_zhaiyao{
			font-size: 14px;
		}
	}
	
</style>
