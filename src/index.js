import Vue from 'vue';
import VueRouter from 'vue-router'


import ZakladniVrstva from './components/ZakladniVrstva.vue';
import StredniVrstva from './components/StredniVrstva.vue';
import Woolpower from './components/Woolpower.vue';
import App from './App.vue';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: "woolpower", component: Woolpower },
    { path: '/zakladni_vrstva', name: "ZakladniVrstva", component: ZakladniVrstva },
    { path: '/stredni_vrstva', name: "StredniVrstva", component: StredniVrstva },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});