<template>
	<div>
		<header-bar :message='message' :path = 'path'></header-bar>
		<div class="content info">
			<card>
				<card-item type="header">
					<img :src="info.data.img" alt="" class="card-cover"/>
				</card-item>
				<card-item type="content">
					<p class="color-gray" v-text='info.data.name'></p>
				</card-item>
			</card>
		</div>
	</div>
</template>
<script>
	import HeaderBar from  '../components/header.vue'
	import Card from '../components/card.vue'
	import CardItem from '../components/col-item-inner.vue'
	export default {
		ready() {
			console.log(this.$route.query);
			this.$http.get('./src/assets/data/info.json',this.$route.query).then((response)=>{
				this.$set('info',response.json());
			})
		},
		data() {
			return {
				message:"详情页",
				path:'/',
				info:[]
			}
		},
		components:{
			HeaderBar,
			Card,
			CardItem
		}
	}
</script>