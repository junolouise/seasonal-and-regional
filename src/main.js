import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import Routes from './routes';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false;
export const router = new VueRouter({
	routes: Routes,
	mode: 'history',
});

new Vue({
	render: h => h(App),
	router: router,
}).$mount('#app');
