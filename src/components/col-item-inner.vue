<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		props: {
			type: {
				type:String,
				default:''
			}
		},
		computed:{
			classes() {
				return 'card-'+this.type
			}
		}
	}
</script>