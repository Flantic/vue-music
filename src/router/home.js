//-----------Main page----------------
import Main from 'components/main.vue'
//-----------Home page and components----------------
import Home from 'components/Home/index.vue'
import Controller from 'components/Controller/index.vue'
// import HomeRecommend from 'components/Home/home_recommend.vue'
// import HomeSongList from 'components/Home/home_songlist.vue'
// import HomeRadio from 'components/Home/home_radio.vue'
// import HomeRanking from 'components/Home/home_ranking.vue'

const HomeRouter = {
    path: '/',
    components: {
        main: Main,
        control:Controller
    },
    children: [{
        path: '/',
        component: Home,
        children:[{
            path:'/',
            components:{
                home_recommend:reslove=> require(['components/Home/home_recommend.vue'],reslove),
                home_songlist:reslove=> require(['components/Home/home_songlist.vue'],reslove),
                home_radio:reslove=> require(['components/Home/home_radio.vue'],reslove),
                home_ranking:reslove=> require(['components/Home/home_ranking.vue'],reslove),
            },
        }]
    },]
}
export default HomeRouter