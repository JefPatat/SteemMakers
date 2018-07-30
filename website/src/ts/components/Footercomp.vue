<template>
	<footer class="bg-primary">
		<div class="container">
			<div class="row bg-primary m-0 p-0">
				<div class="col-md-6">
					<img class="img-fluid d-block mx-auto mt-2 mb-2" src="img/steemmakers_icon_white.svg" style="height: 40px; width: 40px;">
					<div class="row">
						<div class="col-md-12 m-0 p-0">
							<p class="p-0 text-center m-0 text-white"> Copyright © SteemMakers - A community driven project founded by
							<a href="http://www.steemit.com/@jefpatat" class="footer-link-dark">@jefpatat</a>. Our gratitude goes to
							<a href="#/courtesy" class="footer-link-dark">all these nice people</a>. </p>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="col-12 container mt-3 footer-sitemap">
					<div class="row">
						<div class="col-md-12">
						<h6 class="text-white">SteemMakers</h6>
						</div>
					</div>
					<ul class="row footer-list text-muted">
						<li class="list-item col-5 p-0"><router-link to="/Trail" class="footer-link-light">Follow our trail</router-link></li>
						<li class="list-item col-7 p-0"><router-link to="/Delegation" class="footer-link-light">Delegate to us</router-link></li>
						<li class="list-item col-5 p-0"><router-link to="/Blog" class="footer-link-light">Blog</router-link></li>
						<li class="list-item col-7 p-0"><router-link to="/FAQ" class="footer-link-light">FAQ</router-link></li>
						<li class="list-item col-5 p-0"><router-link to="/Contact" class="footer-link-light">Contact</router-link></li>
						<li class="list-item col-7 p-0"><router-link to="/Notices" class="footer-link-light">Notices</router-link></li>
					</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
	import Vue from "vue";
	
	export default Vue.extend({

	});
</script>


<style scoped>
.footer-sitemap
{
	border-left: 0px solid #0776A1;
}

.footer-list
{
	list-style-image: url('/../../../img/list-arrow.png');
}

.footer-link-dark
{
	color: black;
}

.footer-link-light
{
	color: #CBCBCB;
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px)
{
	.footer-sitemap
	{
		border-left: 1px solid #0776A1;
		position:relative;
	}
	.footer-sitemap::before
	{
		content:"";
		display:block;
		position:absolute;
		top:0px;
		left:0px;
		right:0px;
		bottom:0px;
		border-left:1px solid #25A0D0
	}
}
</style>