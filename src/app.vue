<template>
	<div class="page-group">
		<div class="page page-current">
			<router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
			<bar v-if="isIndex">
				<bar-item path="/content" label="首页" icon="home"></bar-item>
				<bar-item path="/indent" label="订单" icon="star"></bar-item>
				<bar-item path="/member" label="会员中心" icon="me"></bar-item>
			</bar>
		</div>
	</div>
</template>
<script> 
	import Bar from "./components/bar-tab.vue"
	import BarItem from "./components/bar-item.vue"

	export default {
		data() {
			return {
				isIndex:true
			}
		},
		replace: false,
		ready() {
			$.init();
		},
		components:{
			Bar,
			BarItem
		}
		
	}
</script>
<style scoped>
.content{
	bottom: 2.5rem;
}
.list-block{
	margin: 0;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>