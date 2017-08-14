// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import layout from './components/layout'
import VRouter from 'vue-router'
import IndexPage from './pages/index'
import VueResource from 'vue-resource'

 Vue.use(VRouter)
 Vue.use(VueResource)

 let router = new VRouter({
   mode: 'history',
   routes: [{
                path: '/',
                component: IndexPage
   }]
 })


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<layout/>',
  components: { layout }
})
