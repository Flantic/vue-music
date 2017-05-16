//-----------Main page----------------
import Main from 'components/main.vue'
//-----------Home page and components----------------
import Home from 'components/Home/index.vue'
import HomeRecommend from 'components/Home/home_recommend.vue'
import HomeSongList from 'components/Home/home_songlist.vue'
import HomeRadio from 'components/Home/home_radio.vue'
import HomeRanking from 'components/Home/home_ranking.vue'

const HomeRouter = {
    path: '/',
    components: {
        main: Main
    },
    children: [{
        path: '/',
        component: Home,
        children:[{
            path:'/',
            components:{
                home_recommend:HomeRecommend,
                home_songlist:HomeSongList,
                home_radio:HomeRadio,
                home_ranking:HomeRanking
            },
        }
        // ,{
        //     path:'/home_songlist',
        //     components: {home_songlist:HomeSongList},
        // },{
        //     path:'/home_radio',
        //     components: {home_radio:HomeRadio},
        // },{
        //     path:'/home_ranking',
        //     components: {home_ranking:HomeRanking},  
        // }
        ]
    },]
}
export default HomeRouter