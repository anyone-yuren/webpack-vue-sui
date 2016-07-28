<template>
	<div class="row no-gutter">
		<col-item v-for="item in items" path="/info" :query='query'>
			<col-item-inner type="header">
				<img :src="item.img" class="card-cover" />
			</col-item-inner>
			<div class="card-content">
				<div class="card-content-inner">
					<p v-text="item.name"></p>
					<div class="color-danger" v-text="item.price"></div>
				</div>
			</div>
		</col-item>
	</div>
</template>

<script>
	import ColItem from './col-item.vue'
	import ColItemInner from './col-item-inner.vue'
	
	export default {
		replace: false,
		data() {
			return {
				items:[
					{name:'一字领散摆裙',img:'./src/assets/img/show-2.jpg',price:'339'},
					{name:'漏肩连衣裙',img:'./src/assets/img/show-1.jpg',price:'439'},
					{name:'无袖露背连衣裙',img:'./src/assets/img/show-3.jpg',price:'499'}
				],
				query:{
					userId:12,
					itemId:221
				}
			}
		},
		components:{
			ColItem,
			ColItemInner
		}
	}
</script>
<style scoped>
	.card-content-inner{
		text-align: center;
	}
</style>