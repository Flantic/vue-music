// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
// import $ from 'jquery'
import Rem from './../static/flexible'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body)

let bus = new Vue({})
/* eslint-disable no-new */
new Vue({
    store,
    router,
    ...App,
}).$mount('#app')

