import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./routes"

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history', // hash : Default
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }

  }
});

router.beforeEach((to, from, next) => {
  console.log("Global olarak kontrol !!");
  next();
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
