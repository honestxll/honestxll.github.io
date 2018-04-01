define(require => {
  const $ = require('jquery');
  const Vue = require('vue');
  const VueRouter = require('vueRouter');
  require('semantic');

  Vue.use(VueRouter);

  const routes = [{
    path: '/',
    name: 'home',
    component: {
      template: `
        <button class="ui button">test</button>
      `
    }
  }]

  const router = new VueRouter({
    routes
  })

  const app = new Vue({
    el: '#app',
    router
  })

})
