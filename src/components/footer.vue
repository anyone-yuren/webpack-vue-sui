<template>
	<bar v-if="isIndex">
		<bar-item path="/content" label="首页" icon="home"></bar-item>
		<bar-item path="/indent" label="订单" icon="star"></bar-item>
		<bar-item path="/member" label="会员中心" icon="me"></bar-item>
	</bar>
</template>
<script>
	import Bar from "./bar-tab.vue"
	import BarItem from "./bar-item.vue"
	
	export default {
		data() {
			return {
				isIndex:''
			}
		},
		props:['isIndex'],
		components: {
			Bar,
			BarItem
		}
	}
</script>

<style>
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>