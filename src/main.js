// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';
import VueResource from 'vue-resource';

import 'common/stylus/index.styl';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

// const routes = [
//   {path: '/goods', component: goods},
//   {path: '/ratings', component: ratings},
//   {path: '/seller', component: seller}
// ];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ]
  // （缩写）相当于 routes: routes
});

// /* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: {App},
  router
}).$mount('#app');
router.push('./goods');
