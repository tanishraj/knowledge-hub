import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import hindi from '@/components/hindi'
import english from '@/components/english'
import contact from '@/components/contact'
import math from '@/components/math'
import about from '@/components/about'
Vue.use(Router)
export default new Router({
	routes: [{
		path: '/',
		name: 'home',
		component: home,
		meta: {
			breadcrumb: [{
				name: 'Home'
			}]
		}
	}, {
		path: '/about',
		name: 'about',
		component: about,
		meta: {
			breadcrumb: [{
				name: 'Home',
				link: '/'
			}, {
				name: 'About'
			}]
		}
	}, {
		path: '/hindi',
		name: 'hindi',
		component: hindi,
		meta: {
			breadcrumb: [{
				name: 'Hindi'
			}]
		}
	}, {
		path: '/english',
		name: 'english',
		component: english,
		meta: {
			breadcrumb: [{
				name: 'Hindi',
				link: 'hindi'
			}, {
				name: 'English'
			}]
		}
	}, {
		path: '/math',
		name: 'math',
		component: math,
		meta: {
			breadcrumb: [{
				name: 'Hindi',
				link: 'hindi'
			}, {
				name: 'English',
				link: 'english'
			}, {
				name: 'Math'
			}]
		}
	}, {
		path: '/contact',
		name: 'contact',
		component: contact,
		meta: {
			breadcrumb: [{
				name: 'Contact'
			}]
		}
	}]
})
