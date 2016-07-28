<template>
	<header class="bar bar-nav">
		<a class="icon icon-left pull-left" v-link="{path:path,replace:true}"></a>
		<h1 class="title">{{message}}</h1>
	</header>
</template>
<script>
	export default {
		props:{
			message:'',
			path:''
		}
	}
</script>