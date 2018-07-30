<template>
	<b-navbar toggleable="md" type="dark" variant="primary" sticky>
		<div class="container"> 

		<a class="navbar-brand d-block p-0 navbar-brand-font" href="#/Home" style="display: block;">
			<img class="navbar-brand-logo" src="img/steemmakers_icon_white.svg">
			<span class="navbar-brand-name">SteemMakers</span>
		</a>

		<b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

		<b-collapse is-nav id="nav_collapse text-center justify-content-end">
			<b-navbar-nav class="ml-auto justify-content-center align-items-center">
				<b-nav-item to="/Blog">Blog</b-nav-item>
				<b-nav-item-dropdown text="Info" right>
					<b-dropdown-item to="/About">About</b-dropdown-item>
					<b-dropdown-item to="/Faq">FAQ</b-dropdown-item>
					<b-dropdown-item to="/Delegation">Delegate to us</b-dropdown-item>
					<b-dropdown-item to="/Trail">Follow our trail</b-dropdown-item>
					<b-dropdown-item to="/Notices">Notices</b-dropdown-item>
				</b-nav-item-dropdown>
				<b-nav-item to="/Contact">Contact</b-nav-item>
				<b-nav-item v-if="!isLoggedIn" @click='login()'>Login</b-nav-item>
				<b-nav-item-dropdown v-if="isLoggedIn" :text="username" right >
					<b-dropdown-item v-if="isReviewer" to="/SubmitPost">Submit post</b-dropdown-item>
					<b-dropdown-item @click='logout()'>Logout</b-dropdown-item>
				</b-nav-item-dropdown>
				<b-nav-item v-if="isLoggedIn" class="nav-item d-none d-md-block"><img :src="profileImage" height="60" width="60" class="rounded-circle"></b-nav-item>
			</b-navbar-nav>
		</b-collapse>
		</div>
	</b-navbar>
</template>

<script lang="ts">
	import Vue from "vue";
	
	export default Vue.extend({
		data: function ()
		{
			return {
				
			}
		},
		computed:
		{
			isLoggedIn() :boolean { return this.$store.state.isLoggedIn; },
			isReviewer() :boolean { return this.$store.state.isReviewer; },
			profileImage() :boolean { return this.$store.state.profileImage; },
			username() :string { return this.$store.state.username; }
		},
		methods:
		{
			login()
			{
				this.$store.dispatch('login');
			},
			logout()
			{
				this.$store.dispatch('logout');
			}
		}
	});
</script>

<style scoped>
	.navbar-brand-logo
	{
		height: 40px;
	}

	.navbar-brand-font
	{
		font-family: 'Rajdhani', sans-serif;
		font-weight:700;
		font-size:28px;
		color:white
	}

	.navbar-brand-name
	{
		position: relative;
		top: 4px;
	}

@media (min-width: 768px)
{
	.navbar-brand-logo
	{
		height: 56px;
	}

	.navbar-brand-font
	{
		font-size:40px;
	}

	/* 	Copy of .align-items-end
		To be able to apply on large screens and not apply on small screens (causes right align in hamburger) */
	 .navbar-items-bottom
	{
		-webkit-box-align:end !important;
		-ms-flex-align:end !important;
		align-items:flex-end !important;
	} 
	
	.navbar-collapse > ul 
	{
		height: 56px;
		
	}
}
</style>