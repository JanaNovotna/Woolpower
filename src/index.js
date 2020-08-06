import Vue from 'vue';
import VueRouter from 'vue-router'


import Woolpower from './components/Woolpower.vue';
import RadaLite from './components/RadaLite.vue';
import RadaUllfrotte from './components/RadaUllfrotte.vue';
import Detske from './components/Detske.vue';
import Doplnky from './components/Doplnky.vue';
import PracovniObleceni from './components/PracovniObleceni.vue';
import Woolpowered from './components/woolpowered.vue';
import Info from './components/Info.vue';
import Kontakt from './components/Kontakt.vue';
import App from './App.vue';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: "woolpower", component: Woolpower },
    { path: '/rada_Lite', name: "radaLite", component: RadaLite },
    { path: '/rada_Ullfrotte', name: "radaUllfrotte", component: RadaUllfrotte },
    { path: '/detske_obleceni', name: "detskeObleceni", component: Detske },
    { path: '/doplnky', name: "doplnky", component: Doplnky },
    { path: '/pracovni_obleceni', name: "pracovniObleceni", component: PracovniObleceni },
    { path: '/Woolpowered', name: "woolpowered", component: Woolpowered },
    { path: '/o_Woolpoweru', name: "info", component: Info },
    { path: '/kontakt', name: "kontakt", component: Kontakt },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});