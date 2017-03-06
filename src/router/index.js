import Vue from 'vue'
import Router from 'vue-router'
//-----------Home page and component----------------
import Home from 'components/Home/index.vue'
import HomeContent from 'components/Home/home_content.vue'
//-----------MyMusic page and component----------------
import MyMusic from 'components/MyMusic/index.vue'
import MusicList from 'components/MyMusic/music_list.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        components: {
            main: Home,
            page: MusicList
        },
        children: [{
            path: '/',
            component: HomeContent
        }]
    }, {
        path: '/Mymusic',
        components: {
            main: MyMusic,
            page: MusicList
        },
        // children: [{
        //     path: '/',
        //     component: MusicList
        // }]
    }]
})