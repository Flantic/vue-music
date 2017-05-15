//-----------Main page----------------
import Main from 'components/main.vue'
//-----------Account page and component----------------
import Account from 'components/Account.vue'

const AccountRouter = {
    path: '/Account',
    components: {
        main: Main
    },
    children: [{
        path: '/',
        component: Account
    }]
}
export default AccountRouter