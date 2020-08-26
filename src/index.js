import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAgile from 'vue-agile';

import Woolpower from './components/Woolpower.vue';
import RadaLite from './components/RadaLite.vue';
import RadaUllfrotte from './components/RadaUllfrotte.vue';
import Detske from './components/Detske.vue';
import Doplnky from './components/Doplnky.vue';
import PracovniObleceni from './components/PracovniObleceni.vue';
import Woolpowered from './components/Woolpowered.vue';
import Info from './components/Info.vue';
import Kontakt from './components/Kontakt.vue';
import Vrstvy from './components/Vrstvy.vue'
import App from './App.vue';
import './index.html';

Vue.use(VueRouter);
Vue.use(VueAgile)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Woolpower },
    { path: '/rada_Lite', name: "radaLite", component: RadaLite },
    { path: '/rada_Ullfrotte', name: "radaUllfrotte", component: RadaUllfrotte },
    { path: '/detske_obleceni', name: "detskeObleceni", component: Detske },
    { path: '/doplnky', name: "doplnky", component: Doplnky },
    { path: '/pracovni_obleceni', name: "pracovniObleceni", component: PracovniObleceni },
    {
      path: '/Woolpowered', name: "woolpowered", component: Woolpowered,
      children: [{ path: '/vrstvy', name: "vrstvy", component: Vrstvy },
      { path: '/o_Woolpoweru', name: "info", component: Info }]
    },
    { path: '/kontakt', name: "kontakt", component: Kontakt },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});