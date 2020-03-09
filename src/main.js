import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes';
import { firestorePlugin } from 'vuefire';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(firestorePlugin);

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyAZOzuHLWb7E1oJWfjObCpt1UvL-iHFa4o',
		libraries: 'places', // necessary for places input
	},
});
Vue.config.productionTip = false;
export const router = new VueRouter({
	routes: Routes,
	mode: 'history',
});

new Vue({
	render: h => h(App),
	router: router,
}).$mount('#app');
