<template>
  <div id="notification">

    <div class="contentNotif">

      <div class="headerNotif">
        <h4>Notifications</h4>
        <span>Custom Vue notifications plugin</span>
      </div>

      <div class="containerNotif">

        <b-row>

          <b-col md="6">

            <h5>Notifications Style</h5>
            <div class="alert alert-info">
              <span>This is a plain notification</span>
            </div>

            <div class="alert alert-info">
              <button class="close" type="button" aria-hidden="true">×</button>
              <span>This is a notification with close button.</span>
            </div>

            <div class="alert alert-info alert-icon">
              <button class="close" type="button" aria-hidden="true">×</button>
              <span class="ti-bell icon-notif"></span>
              <span>This is a notification with close button and icon.</span>
            </div>

            <div class="alert alert-info alert-icon">
              <button class="close" type="button" aria-hidden="true">×</button>
              <span class="ti-pie-chart icon-notif"></span>
              <span>This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
            </div>

          </b-col>

          <b-col md="6">

            <h5>Notifications states</h5>
            <div class="alert alert-info">
              <button class="close" type="button" aria-hidden="true">×</button>
              <span><b>Info</b> - This is a regular notification made with ".alert-info"</span>

            </div>

            <div class="alert alert-success">
              <button class="close" type="button" aria-hidden="true">×</button>
              <span><b>Success</b> - This is a regular notification made with ".alert-success"</span>
            </div>

            <div class="alert alert-warning">
              <button class="close" type="button" aria-hidden="true">×</button>
              <span><b>Warning</b> - This is a regular notification made with ".alert-warning"</span>
            </div>

            <div class="alert alert-danger">
              <button class="close" type="button" aria-hidden="true">×</button>
              <span><b>Danger</b> - This is a regular notification made with ".alert-danger"</span>
            </div>

          </b-col>

        </b-row>

      </div>

      <div class="containerPluginNotif">

        <PluginNotification v-bind:group="group[0]" v-bind:title="title[0]" v-bind:text="text[0]" v-bind:duration="duration[0]" v-bind:classes="classes[0]" v-bind:position="position[0]"></PluginNotification>

        <h5>
          Notifications Places
          <p class="subtitle">
            Click to view notifications
          </p>
        </h5>

        <b-row>
          <b-col md="3">
            <button class="btn btn-default btn-block" @click="callNotif()" >Top Left</button>

          </b-col>

          <b-col md="3">

          </b-col>

          <b-col md="3">

          </b-col>
        </b-row>

      </div>
    </div>
  </div>
</template>
<script>
import PluginNotification from '@/components/UI/PluginNotification/PluginNotification'
export default {
  name: 'Notification',
  components: {
    PluginNotification
  },
  data () {
    return {
      group: ['foo'],
      title: ['title'],
      text: ['Hello User!'],
      duration: ['3000'],
      classes: ['vue-notification info', 'vue-notification success', 'vue-notification warn', 'vue-notification success'],
      position: ['top right']
    }
  },
  methods: {
    callNotif () {
      alert('test')
    }
  }
}
</script>
<style scoped>
#notification{
  padding:30px;
}
#notification .contentNotif{
  background:white;
  border-radius:6px;
}
#notification .contentNotif .headerNotif{
  padding: 15px 15px 10px 15px;
}
#notification .contentNotif .headerNotif h4{
  color:rgb(37,36,34);
  font-size:21px;
  font-weight:300;
}
#notification .contentNotif .headerNotif span{
  color:rgb(154,154,154);
  font-size:14px;
  font-weight:400;
}
#notification .contentNotif .containerNotif{
  padding: 15px 15px 10px 15px;
}
#notification .contentNotif .containerNotif h5{
  color:rgb(37,36,34);
  font-size: 17.5px;
  font-weight: 400;
  line-height:1.4em;
  margin-bottom:15px;
}
#notification .contentNotif .containerNotif span{
  font-size:14px;
  line-height:20px;
  max-width:89%;
  display:block;
  box-sizing:border-box;
}
#notification .close{
  float:right;
  font-size:21px;
  font-weight:bold;
  line-height:1;
  color:black;
  text-shadow:  0 1px 0 white;
  opacity: 0.2;
}
#notification .alert{
  padding: 10px 15px 10px 15px;
  margin-bottom:20px;
  border-radius:4px;
}
#notification .alert-info{
  background-color: #7CE4FE;
  color: #3091B2;
}
#notification .alert-icon{
  padding-left:65px;
}
#notification .alert-success{
  background-color:#8EF3C5;
  color:#229863;
}
#notification .alert-warning{
  background-color:#FFE28C;
  color:#BB992F;
}
#notification .alert-danger{
  background-color:#FF8F5E;;
  color:#B33C12;
}
#notification .icon-notif{
  position:absolute;
  left: 15px;
  top: 50%;
  margin-top:-10px;
  font-size:30px !important;
}
/* containerPluginNotif */

#notification .contentNotif .containerPluginNotif{
padding: 15px 15px 10px 15px;
}
#notification .contentNotif .containerPluginNotif h5 .subtitle{
  color:#9A9A9A;
  font-size:14px;
  margin-bottom:0;
  font-weight:400;
}
#notification .contentNotif .containerPluginNotif .btn{
  border-radius:20px;
  box-sizing:border-box;
  border-width:2px;
  font-size:14px;
  font-weight:500;
  padding: 7px 18px;
}
#notification .contentNotif .containerPluginNotif .btn:hover{
  background-color:#66615B;
  border-color:#66615B;
  color:rgba(255,255,255,0.7);
}
</style>
