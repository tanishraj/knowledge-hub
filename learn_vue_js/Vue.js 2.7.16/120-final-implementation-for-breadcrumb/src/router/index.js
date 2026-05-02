import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
	// Elon Musk's Components
import course from '@/components/ElonMusk/course.vue'
import hindi from '@/components/ElonMusk/hindi.vue'
import english from '@/components/ElonMusk/english.vue'
Vue.use(Router)
const router = new Router({
	routes: [{
		path: '/',
		component: home,
		meta: {
			breadCrumb: 'Home'
		}
	}, {
		path: '/course',
		component: course,
		meta: {
			breadCrumb: 'Course'
		},
		children: [{
			path: ':hindi',
			component: hindi,
			props: true,
			meta: {
				breadcrumb: 'Hindi'
			},
			children: [{
				path: ':english',
				component: english,
				props: true,
				meta: {
					breadcrumb: 'English'
				},
			}]
		}]
	}, {
		path: '*',
		redirect: '/'
	}]
})
export default router
