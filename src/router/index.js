import Vue from 'vue';
import Router from 'vue-router';
import login from '../view/login.vue';
import home from '../view/home.vue';

Vue.use(Router);

var router = new Router({
  routes: [
    {path: '/', redirect: '/login'},
    {name: 'login', path: '/login', component: login},
    {name: 'home', path: '/home', component: home}

  ]
});

export default router;
