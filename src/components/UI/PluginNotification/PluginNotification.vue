<template>
  <div id="pluginNotification">
    <!-- <div class="content alert-info">
      <button class="close" type="button" aria-hidden="true">×</button>
      <b-row>
        <b-col md="2">
          <i class="ti-gift"></i>
        </b-col>
        <b-col md="10">
          <div class="test">Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer.</div>
        </b-col>
      </b-row>
    </div> -->
    <notifications :group="group" :title="title" :message="text" :duration="parseInt(duration)" :classes="String(classes)" :position="position" />
  </div>
</template>
<script>
export default {
  name: 'PluginNotification',
  props: ['group', 'title', 'text', 'duration', 'classes', 'position'],
  data: () => ({
  }),
  mounted () {
    this.$notify({
      group: 'foo',
      title: 'Important message',
      text: 'Hello user! This is a notification!',
      classes: 'vue-notification warn',
      position: 'top left',
      reverse: true
    })
  }
}
</script>
 <style scoped>
#pluginNotification{
  font-size:14px;
}
#pluginNotification .content{
  font-size:14px;
  height:70px;
  border-radius:4px;
  box-sizing:border-box;
  padding: 0px 10px 10px 10px;
  width: 350px;
  position:relative;
}
#pluginNotification .content .row{
  width:100%;

}
#pluginNotification .content .row .test{
  display:block;
}
#pluginNotification .content .row i{
  font-size:30px;
}
#pluginNotification .alert-info{
  background:rgb(124,228,254);
  color:#3091B2;
}
#pluginNotification .close{
  position: absolute;
  top:5px;
  right:10px;
  text-shadow:0 1px 0 #fff;
  opacity: .2;
  color:#000;
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
