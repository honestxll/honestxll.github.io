define(require => {
  const $ = require('jquery');
  const Vue = require('vue');
  const VueRouter = require('vueRouter');
  require('semantic');
  const Layout = require('components/Layout');
  const Home = require('components/Home');
  const About = require('components/About');

  Vue.use(VueRouter);

  const routes = [{
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/about', name: 'about', component: About },
    ]
  }]

  const router = new VueRouter({
    routes
  })

  const app = new Vue({
    el: '#app',
    router
  })

})
