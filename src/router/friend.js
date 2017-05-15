//-----------Main page----------------
import Main from 'components/main.vue'
//-----------Friend page and component----------------
import MyFriend from 'components/Friend.vue'

const FriendRouter = {
    path: '/Friend',
    components: {
        main: Main
    },
    children: [{
        path: '/',
        component: MyFriend
    }]
}
export default FriendRouter