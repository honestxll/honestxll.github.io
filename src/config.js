require.config({
  baseUrl: './src',
  paths: {
    jquery: 'bower_components/jquery/dist/jquery.min',
    vue: 'bower_components/vue/dist/vue.min',
    vueRouter: 'bower_components/vue-router/dist/vue-router.min',
    semantic: 'bower_components/semantic/dist/semantic.min'
  },
  shim: {
    semantic: ['jquery']
  },
  packages: {
    name: 'components',
    location: 'components',
    name: 'components',
  }
})
require(['./main'])
