import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Auth from '@okta/okta-vue';

Vue.use(Auth, {
  issuer: 'https://{yourOktaDomain}/oauth2/default',
  client_id: '{yourClientId}',
  redirect_uri: window.location.origin + '/callback',
});
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "search" */ '../views/Home.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue')
    }
  ]
})

export default router;