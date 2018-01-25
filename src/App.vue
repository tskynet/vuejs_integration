<template>
  <div id="app">
    <div>
      <div class="sideBar">
        <div class="logo">
          <div class="logo-img">
            <img src="static/img/vue-logo.png" alt="" />

          </div>
          <span>Paper Dashboard</span>
        </div>
        <ul class="navLink">
          <li><i class="fa fa-thumbs-up" aria-hidden="true"></i></li>
          <li><a href="#">dashboard</a></li>
          <li><a href="#">user profile</a></li>
          <li><a href="#"><icon name="envelope"></icon>table list</a></li>
          <li><a href="#">typography</a></li>
          <li><a href="#">icons</a></li>
          <li><a href="#">maps</a></li>
          <li><a href="#">notifications</a></li>
        </ul>


      </div>
      <div class="mainPanel">
        <div class="navBar">
          <div class="containerNavBar">
            <div class="navBarLeft">
              <p>Overview</p>
            </div>
            <div class="navBarRight">
              <ul class="nav navbar-right">
                <li><a href="#">Stats</a></li>
                <li>
                  <a href="#">
                    <b-dropdown id="dropDown" text="Settings" icon="ti-bell">
                      <b-dropdown-item>Notification 1</b-dropdown-item>
                      <b-dropdown-item>Notification 2</b-dropdown-item>
                      <b-dropdown-item>Notification 3</b-dropdown-item>
                      <b-dropdown-item>Notification 4</b-dropdown-item>
                      <b-dropdown-item>Another notification</b-dropdown-item>
                    </b-dropdown>
                  </a>
                </li>
                <li><a href="#">Notifications</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Icon from 'vue-awesome/components/Icon'
Vue.use(BootstrapVue)
export default {
  name: 'app',
  components: Icon,
  data () {
  }
}
</script>

<style>
#app {
  margin-top:20px;
  margin-left:auto;
  margin-right:auto;
  font-size:0;
}
#app h1{
  text-align:center;
}
#app a{
  font-family: Muli, Helvetica, Arial, sans-serif;
}
#app .sideBar{
  background: #212120;
  color:white;
  width:260px;
  float:left;
}
#app .sideBar .logo{
  padding: 13px 0 13px 0;
  font-size:14px;
  font-weight:600;
  text-align:left;
}
#app .sideBar .logo-img{
  background:white;
  border-radius:50%;
  display:inline-block;
  height:40px;
  width:40px;
  text-align:center;
  line-height:40px;
  margin-left:20px;
  margin-right:20px;
}
#app .sideBar .logo-img img{
  max-width:21px;
  text-align:center;
}

#app .sideBar .navLink{
  list-style:none;
  padding:0;
}
#app .sideBar .navLink li{
  text-transform: uppercase;
  text-align:center;
  padding:10px 0 10px 0;
  margin:10px 0 10px 0;
}
#app .sideBar .navLink li a{
  color:white;
  font-size:12px;
  line-height:30px;
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
</style>
