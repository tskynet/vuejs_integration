import Vue from 'vue'
import Router from 'vue-router'
import Hash from '@/components/hash/Hash'
import HashMd5 from '@/components/hash/HashMd5'
import HashSha1 from '@/components/hash/HashSha1'
import HashSha256 from '@/components/hash/HashSha256'
import ContainerDashBoard from '@/components/UI/DashBoard/ContainerDashBoard'
import UserBehavior from '@/components/UI/DashBoard/UserBehavior'
import UserProfileContainer from '@/components/UI/UserProfile/UserProfileContainer'
import TableListContainer from '@/components/UI/TableList/TableListContainer'
import IconList from '@/components/UI/IconList/IconList'
import Notification from '@/components/UI/Notification/Notification'
import Typography from '@/components/UI/Typography/Typography'
import Map from '@/components/UI/Map/Map'
Vue.use(Router)

export default new Router({
  mode: 'history', // with that we get a nice URL (without '#')
  routes: [
    {
      path: '/',
      name: 'ContainerDashBoard',
      component: ContainerDashBoard
    },
    {
      path: '/hash',
      name: 'Hash',
      component: Hash,
      children: [{
        path: 'md5',
        component: HashMd5,
        name: 'Hash.Md5'
      },
      {
        path: 'sha1',
        component: HashSha1,
        name: 'Hash.Sha1'
      },
      {
        path: 'sha256',
        component: HashSha256,
        name: 'Hash.Sha256'
      }]
    },
    {
      path: '/testcard',
      component: ContainerDashBoard,
      name: 'ContainerDashBoard'

    },
    {
      path: '/testbehavior',
      component: UserBehavior,
      name: 'UserBehavior'
    },
    {
      path: '/testprofile',
      component: UserProfileContainer,
      name: 'UserProfileContainer'
    },
    {
      path: 'testtable',
      component: TableListContainer,
      name: 'TableListContainer'
    },
    {
      path: 'testicon',
      component: IconList,
      name: 'IconList'
    },
    {
      path: 'testnotification',
      component: Notification,
      name: 'Notification'
    },
    {
      path: 'testtypo',
      component: Typography,
      name: 'Typography'
    },
    {
      path: 'map',
      component: Map,
      name: 'Map'
    }
  ]
})
