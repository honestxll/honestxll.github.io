require.config({
  baseUrl: './src',
  paths: {
    jquery: 'bower_components/jquery/dist/jquery.min',
    vue: 'bower_components/vue/dist/vue.min',
    vueRouter: 'bower_components/vue-router/dist/vue-router.min',
    semantic: 'bower_components/semantic/dist/semantic.min',
    highlight: 'bower_components/highlightjs/highlight.pack.min',
    md: 'bower_components/markdown-it/dist/markdown-it.min',
    paginate: 'bower_components/vuejs-paginate/dist/index'
  },
  shim: {
    semantic: ['jquery'],
    highlight: {
      exports: 'hljs'
    },
    html: {
      exports: 'html'
    }
  },
  packages: {
    name: 'components',
    location: 'components',
    name: 'components',
  },
  packages: {
    name: 'bower_components',
    location: 'bower_components',
    name: 'bower_components',
  }
})
require(['./main'])
