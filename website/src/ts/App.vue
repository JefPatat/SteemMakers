<template>
	<div class="application d-flex flex-column bg-secondary">
		<navbar></navbar>
		
		<div class="application-content">
			<router-view></router-view>
		</div>

		<footercomp></footercomp>
	</div>
</template>

<script>
	import Navbar from './Components/Navbar'
	import Footercomp from './Components/Footercomp'
	export default {
		name: 'app',
		components: {Navbar, Footercomp},
	}
</script>

<style scoped>
	.application
	{
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}

	.application-content
	{
		flex: 1;
	}
</style>