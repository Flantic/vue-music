// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import $ from 'jquery'
import Rem from './../static/flexible'
import FastClick from 'fastclick'

FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
    store,
    router,
    ...App,
}).$mount('#app')