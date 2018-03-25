<template>
  <div id="pluginNotification">
    <div class="content alert-info">
      <button class="close" type="button" aria-hidden="true">×</button>
      <b-row>
        <b-col md="2">
          <i class="ti-gift"></i>
        </b-col>
        <b-col md="10">
          <div class="test">Welcome to <b>Paper Dashboard</b> - a beautiful freebie for every web developer.</div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PluginNotification',
  data: () => ({

  })
}
</script>
<style scoped>
#pluginNotification{
}
#pluginNotification .content{
  font-size:14px;
  height:70px;
  border-radius:4px;
  box-sizing:border-box;
  padding: 10px 10px 10px 10px;
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
</style>
