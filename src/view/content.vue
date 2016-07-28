<template>
	<div class="content index">
		<div class="content-inner">
			<slider></slider>
			<bar class="content-bar">
				<bar-item path="/content/news" label="最新"></bar-item>
				<bar-item path="/content/moods" label="人气"></bar-item>
				<bar-item path="/content/commodity" label="现货"></bar-item>
				<bar-item path="/content/notice" label="公告"></bar-item>
			</bar>
			<router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
		</div>
	</div>
</template>
<style scoped> /*只作用域当前文档*/
.list-block{
	margin: 0;
}
</style>
<script>
import Slider from '../components/slider.vue'
import Bar from '../components/bar-tab.vue'
import barItem from '../components/bar-item.vue'
	export default {
		components: {
			Slider,
			Bar,
			barItem
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
	.content-bar {
	  background: #efeff4;
	  height: 2.8rem;
	  position: relative;
	  box-shadow: 0 .01rem .05rem rgba(0,0,0,.3);
	}
	.content-bar .tab-item {
	  height: 2.8rem;
	  background-color: white;
	}
</style>