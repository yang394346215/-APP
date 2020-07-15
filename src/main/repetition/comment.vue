<template>
	<div class='com_div'>
		<h1>发表评论</h1>
		<div class='com_fen'>
			<textarea placeholder="发表评论,最多120字" maxlength="120" v-model="text"></textarea>
			<mt-button size="large" type="primary" @click='tijiao'>发表评论</mt-button>
			<div v-for="(aaa,i) in comlist" :key="aaa.add_time" >
				<div class='com_title'>
					<span>第{{i+1}}楼 用户:{{aaa.user_name}}</span>
					<span>发表时间:{{aaa.add_time}}</span>
				</div>
				<div>{{aaa.content}}</div>
				
			</div>
			<mt-button size="large" type="danger" plain @click='fen'>加载更多</mt-button>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				msg:1,
				list:[],
				comlist:[],
				text:''
			}
		},
		methods:{
			show(){
				this.$axios.get("http://rap2.taobao.org:38080/app/mock/260858/comment").then(res=>{
					console.log(res.data.message)
					this.list=res.data.message
					this.comlist=this.list.slice(0,5)
				})
			},
			fen(){
				this.msg++
				this.comlist=this.list.slice(0,this.msg*5)
			},
			tijiao(){
				if(this.text != ''){
					let obj={
						add_time:this.mydate(),
						content:this.text,
						user_name:'张三'
					}
					this.list.push(obj)
				}else{
					Toast('评论不能为空');
				}
				this.text=''
			},
			mydate(){
				var a = new Date()
				var Y = a.getFullYear();
				var M = (a.getMonth()+1).toString().padStart(2,'0');
				var D = a.getDate().toString().padStart(2,'0');
				var h = a.getHours().toString().padStart(2,'0');
				var m = a.getMinutes().toString().padStart(2,'0');
				var s = a.getSeconds().toString().padStart(2,'0');
				return `${Y}-${M}-${D}  ${h}:${m}:${s}`
			}
		},
		created(){
			this.show()
		}
		
	}
</script>

<style lang="scss" scoped>
	.com_div{
		h1{
			font-size: 16px;
			font-weight: bold;
		}
		.com_fen{
			border-top: 2px solid #4E555B;
			textarea{
				
				margin-top: 5px;
				margin-bottom: 0;
			}
			.com_title{
				background-color: #cecece;
				display: flex;
				justify-content: space-between;
				span{
					font-size: 12px;
				}
			}
		}
	}
</style>
