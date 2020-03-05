import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './routes';
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

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
