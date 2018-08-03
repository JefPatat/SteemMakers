import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About.vue'
import Article from '../components/Article.vue'
import Authentication from '../components/Authentication.vue'
import Blog from '../components/Blog.vue'
import Branding from '../components/Branding.vue'
import Contact from '../components/Contact.vue'
import Courtesy from '../components/Courtesy.vue'
import Delegation from '../components/Delegation.vue'
import FAQ from '../components/FAQ.vue'
import Home from '../components/Home.vue'
import Notices from '../components/Notices.vue'
import SubmitPost from '../components/SubmitPost.vue'
import Trail from '../components/Trail.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '',
			name: 'Landing',
			component: Home,
			props: true,
		},
		{
			path: '/home/:page?',
			name: 'Home',
			component: Home,
			props: true,
		},
		{
			path: '/article/:author/:permlink',
			name: 'Article',
			props: true,
			component: Article
		},
		{
			path: '/authentication',
			name: 'Authentication',
			props: true,
			component: Authentication
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/blog',
			name: 'Blog',
			component: Blog
		},
		{
			path: '/branding',
			name: 'Branding',
			component: Branding
		},
		{
			path: '/contact',
			name: 'Contact',
			component: Contact
		},
		{
			path: '/courtesy',
			name: 'Courtesy',
			component: Courtesy
		},
		{
			path: '/delegation',
			name: 'Delegation',
			component: Delegation
		},
		{
			path: '/faq',
			name: 'FAQ',
			component: FAQ
		},
		{
			path: '/notices',
			name: 'Notices',
			component: Notices
		},
		{
			path: '/submitpost',
			name: 'SubmitPost',
			component: SubmitPost
		},
		{
			path: '/trail',
			name: 'Trail',
			component: Trail
		}
	],
	scrollBehavior (to, from, savedPosition)
	{
		return { x: 0, y: 0 }
	}
})