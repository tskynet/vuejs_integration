<template>
  <div id="app">
    <div class="contentAll">
        <div class="contentLeft" id="leftContent">
          <div class="sideBar" id="leftBar">
              <div class="logo" v-on:click="movingArrow('dashboard')">
                <div class="logo-img">
                  <img src="static/img/vue-logo.png" alt="" />

                </div>
                <router-link :to="{name:'ContainerDashBoard'}">Paper Dashboard</router-link>
              </div>
              <ul class="navLink">
                <li v-on:click="movingArrow('dashboard')"><router-link :to="{name:'ContainerDashBoard'}"><i class="ti-panel"></i>dashboard</router-link></li>
                <li v-on:click="movingArrow('userprofile')"><router-link :to="{name:'UserProfileContainer'}"><i class="ti-user"></i>user profile</router-link></li>
                <li v-on:click="movingArrow('tablelist')"><router-link :to="{name:'TableListContainer'}"><i class="ti-view-list-alt"></i>table list</router-link></li>
                <li v-on:click="movingArrow('typography')"><router-link :to="{name:'Typography'}"><i class="ti-text"></i>typography</router-link></li>
                <li v-on:click="movingArrow('icons')"><router-link :to="{name:'IconList'}"><i class="ti-pencil-alt2"></i>icons</router-link></li>
                <li v-on:click="movingArrow('map')"><router-link :to="{name:'Map'}"><i class="ti-map"></i>maps</router-link></li>
                <li v-on:click="movingArrow('notifications')"><router-link :to="{name:'Notification'}"><i class="ti-bell"></i>notifications</router-link></li>
              </ul>
              <div class="movingArrow " :class="arrow"></div>
          </div>
        </div>


      <div class="mainPanel" id="rightBar">
        <div class="navBar">
          <div class="containerNavBar">
            <div class="navBarLeft">
              <p>{{ title }}</p>
            </div>
            <div class="navBarRight">
              <ul class="nav navbar-right">
                <li><a href="#"><i class="ti-panel"></i> Stats</a></li>
                <li>
                  <a href="#">
                    <i class="ti-bell"></i>
                    <b-dropdown id="dropDown" text="Notifications" icon="ti-bell">
                      <b-dropdown-item>Notification 1</b-dropdown-item>
                      <b-dropdown-item>Notification 2</b-dropdown-item>
                      <b-dropdown-item>Notification 3</b-dropdown-item>
                      <b-dropdown-item>Notification 4</b-dropdown-item>
                      <b-dropdown-item>Another notification</b-dropdown-item>
                    </b-dropdown>
                  </a>
                </li>
                <li><a href="#"><i class="ti-settings"></i> Settings</a></li>
              </ul>

            </div>
          </div>
          <router-view/>
        </div>
        <Footer></Footer>
      </div>
    </div>
    <div style="clear:both">test</div>
  </div>
</template>

<script>
import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Footer from '@/components/UI/Footer/Footer'
Vue.use(Icon)
export default {
  name: 'app',
  components: {
    Icon,
    Footer
  },
  data: () => ({
    arrow: '',
    title: 'Overview'
  }),
  methods: {
    movingArrow (location) {
      if (location === 'userprofile' && (window.location.pathname === '/testprofile')) {
        this.arrow = 'movingArrowUserProfile'
        this.title = 'Stats'
      } else if (location === 'dashboard' && (window.location.pathname === '/')) {
        this.arrow = 'movingArrowDashboard'
        this.title = 'Overview'
      } else if (location === 'tablelist' && (window.location.pathname === '/testtable')) {
        this.arrow = 'movingArrowTableList'
        this.title = 'Table-list'
      } else if (location === 'typography' && (window.location.pathname === '/testtypo')) {
        this.arrow = 'movingArrowTypography'
        this.title = 'Typography'
      } else if (location === 'icons' && (window.location.pathname === '/testicon')) {
        this.arrow = 'movingArrowIcons'
        this.title = 'Icons'
      } else if (location === 'map' && (window.location.pathname === '/map')) {
        this.arrow = 'movingArrowMaps'
        this.title = 'Maps'
      } else if (location === 'notifications' && (window.location.pathname === '/testnotification')) {
        this.arrow = 'movingArrowNotifications'
        this.title = 'Notifications'
      }
    }
  }
}
</script>

<style>
#app {
  margin-left:auto;
  margin-right:auto;
  font-size:0;
  font-family:'Muli', Helvetica, Arial, sans-serif;
  box-sizing:border-box;
  color:#66615b;
  background: #212120;
}
#app h1{
  text-align:center;
}
#app a{
  font-family: 'Muli', Helvetica, Arial, sans-serif;
}
#app .contentLeft{
  position:fixed;
}
#app .sideBar{
  background: #212120;
  color:white;
  width:260px;
  float:left;
  position:relative;
}
#app .sideBar .logo{
  padding: 13px 0 13px 0;
  font-size:14px;
  font-weight:600;
  text-align:left;
  width:calc(100% - 40px);
  margin-left:20px;
  margin-right:20px;
  border-bottom:1px solid rgba(255, 255, 255, 0.3);
}
#app .sideBar .logo a{
  color:white;
  padding-left:10px;
}
#app .sideBar .logo a:hover{
  text-decoration:none;

}
#app .sideBar .logo-img{
  background:white;
  border-radius:50%;
  display:inline-block;
  height:40px;
  width:40px;
  text-align:center;
  line-height:40px;
}
#app .sideBar .logo-img img{
  max-width:21px;
  text-align:center;
}
#app .sideBar .navLink{
  list-style:none;
  padding:0;
}
#app .sideBar .navLink i{
  font-size:24px;
  font-weight:bold;
  margin-right: 15px;
  float:left;
  height:30px;
  width:30px;
}
#app .sideBar .navLink li{
  text-transform: uppercase;
  padding:10px 25px 10px 25px;
  margin:10px 0 10px 0;
  opacity:0.7;
  font-weight:bold;
}
#app .sideBar .navLink li a{
  color:white;
  font-size:12px;
  line-height:30px;
}
#app .sideBar .navLink li a:hover{
    color:#41B883;
    text-decoration:none;
}
#app .sideBar .movingArrow{
  border-right: 17px solid #f4f3ef;
  border-top : 17px solid transparent;
  border-bottom : 17px solid transparent;
  display:inline-block;
  position:absolute;
  left: 243px;
  top:84px;
  transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1);
}
#app .sideBar .movingArrowDashboard{
  transform:translate3d(0px, 0px, 0px);
}
#app .sideBar .movingArrowUserProfile{
  transform:translate3d(0px, 60px, 0px);
}
#app .sideBar .movingArrowTableList{
  transform:translate3d(0px, 120px, 0px);
}
#app .sideBar .movingArrowTypography{
  transform:translate3d(0px, 180px, 0px);
}
#app .sideBar .movingArrowIcons{
  transform:translate3d(0px, 240px, 0px);
}
#app .sideBar .movingArrowMaps{
  transform:translate3d(0px, 300px, 0px);
}
#app .sideBar .movingArrowNotifications{
  transform:translate3d(0px, 360px, 0px);
}
/*right side*/
#app .mainPanel{
  width : calc(100% - 260px) !important;
  float:right;
  background:#f4f3ef;
}
#app .mainPanel .navBar{
  min-height:75px;
  border-bottom : 1px solid #DDDDDD;
}
#app .mainPanel .navBar .containerNavBar{
  padding-left:15px;
  padding-right:15px;
  margin-right:auto;
  margin-left:auto;
  min-height:75px;
  font-size:12px;
  border-bottom:1px solid rgb(221,221,221);
}
#app .mainPanel .navBar .containerNavBar .navBarLeft{
  float:left;
  font-size:20px;
  font-weight:600;
  color: #5e5e5e;
  line-height:75px;
}
#app .mainPanel .navBar .containerNavBar .navBarRight{
  float:right;
  line-height:75px;
}
#app .mainPanel .navBar .containerNavBar .navBarRight ul{
  list-style: none;
}
#app .mainPanel .navBar .containerNavBar .navBarRight ul li{
  float:left;
}
#app .mainPanel .navBar .containerNavBar .navBarRight ul li a{
  padding: 10px 15px 10px 15px;
  margin-top:15px;
  margin-bottom:15px;
  font-size:16px;
  color:rgb(154,154,154);
  line-height:22.85px;
}
#app .mainPanel .navBar .containerNavBar .navBarRight ul li a:hover{
  color:#68B3C8;
  text-decoration: none;
}
#app .mainPanel .navBar .containerNavBar .navBarRight ul li a #dropDown{
  margin:0 !important
}
#app .mainPanel .navBar .containerNavBar .navBarRight ul li a #dropDown .dropdown-item{
  background-color: #FFFCF5;
  margin:0;
}
/*#FFFCF5*/
#app .mainPanel .navBar .containerNavBar .navBarRight ul li a .dropdown-toggle{
  padding : 0;
  background:none;
  color:rgb(154,154,154);
  border:none;
}
.vue-notification {
  padding: 10px;
  margin: 0 5px 5px;
  z-index:999;
  font-size: 12px;

  color: #ffffff;
  background: #44A4FC;
  border-left: 5px solid #187FE7;

  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  &.error {
    background: #E54D42;
    border-left-color: #B82E24;
  }

  &.success {
    background: #68CD86;
    border-left-color: #42A85F;
  }
}
</style>
