import Vue from 'vue'
import Router from 'vue-router'
//-----------Home page and component----------------
import Home from 'components/Home/index.vue'
import Recommedd from 'components/Home/recommend.vue'

import MyMusic from 'components/MyMusic'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
        children: [{
            path: '/',
            component: Recommedd
        }]
    }, {
        path: '/Mymusic',
        name: 'MyMusic',
        component: MyMusic
    }]
})