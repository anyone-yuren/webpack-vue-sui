<template>
	<div id="islider"></div>
</template>
<script>
import ISlider from '../assets/js/iSlider.js'

export default {
	data() {
		return {
			slider :null
		}
	},
	ready() {
		this.$http.get('./src/assets/data/banner.json')
		.then(({data:{code,message,data}})=>{
			let imgs = [];
			for(let i = 0; i<data.length; i++) {
				imgs.push(data[i])
			}
			let self = this
			this.slider = new ISlider({
				dom:self.$el,
				data:imgs,
				isVertical:false,
				isLooping:true,
				isDebug:false,
				isAutoplay:true
			})
		})
	}
}
</script>
<style>
	#islider{
		height: 10rem;
		width: 100%;
		overflow: hidden;
		position:relative;
	}
	#islider ul{
		list-style: none;
		margin: 0;
		padding: 0;
		height: 100%;
		font-size: 0;
		overflow: hidden;
	}
	#islider li{
		position: absolute;
		font-size: 18px;
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		list-style: none;
	}
	#islider img{
		width: 100%;
		height: auto;
	}
</style>