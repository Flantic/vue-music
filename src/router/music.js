//-----------Main page----------------
import Main from 'components/main.vue'
//-----------MyMusic page and components----------------
import MyMusic from 'components/MyMusic/index.vue'
import MusicList from 'components/MyMusic/music_list.vue'

const MusicRouter = {
    path: '/Mymusic',
    components: {
        main: Main
    },
    children: [{
        path: '/',
        component: MyMusic
    }]
}
export default MusicRouter