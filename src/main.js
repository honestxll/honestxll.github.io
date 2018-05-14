define(require => {
  const $ = require('jquery')
  const Vue = require('vue')
  const VueRouter = require('vueRouter')
  require('semantic')
  const Layout = require('components/Layout')
  const Home = require('components/Home')
  const About = require('components/About')
  const Blog = require('components/Blog')
  const Article = require('components/Article')

  Vue.use(VueRouter)

  const routes = [{
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/about', name: 'about', component: About },
      { path: '/blog', name: 'blog', component: Blog },
      { path: '/blog/:id', name: 'article', component: Article },
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
