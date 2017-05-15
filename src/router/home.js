//-----------Main page----------------
import Main from 'components/main.vue'
//-----------Home page and components----------------
import Home from 'components/Home/index.vue'
import HomeContent from 'components/Home/home_content.vue'

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
            component: HomeContent,
        }]
    }]
}
export default HomeRouter