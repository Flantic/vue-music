import Vue from 'vue'
import Router from 'vue-router'
//-----------page router----------------
import HomeRouter from './home'
import MusicRouter from './music'
import FriendRouter from './friend'
import AccountRouter from './account'
import ControlRouter from './control'
console.log(HomeRouter)
Vue.use(Router)

export default new Router({
    routes: [
        HomeRouter,
        MusicRouter,
        FriendRouter,
        AccountRouter,
        ControlRouter,
        {path:'/',redirect: '/home'},
        {path:'*', redirect: '/'}
    ]
})