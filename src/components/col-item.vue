<template>
	<div class="col-50" v-on:click="router">
		<div class="card">
			<slot></slot>
		</div>
	</div>
</template>
<style scoped>
	.row{
		margin-top: .1rem;
	}
	.card{
		margin: .1rem 0;
	}
	.row.no-gutter .col-50:nth-child(odd){
		padding-right: .1rem;
	}
	.row.no-gutter .col-50:nth-child(even){
		padding-left: .1rem;
	}
</style>
<script>
	export default {
		props:{
			path:{
				type:String,
				default:'/'
			},
			query:{
				itenId:'',
				userId:''
			}
		},
		methods:{
			router:function() {
				this.$router.go({
					path:this.path,
					query:this.query
				})
			}
		}
	}
</script>