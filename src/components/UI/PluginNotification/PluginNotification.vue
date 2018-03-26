<template>
  <div id="pluginNotification">
    <notifications :group="group" :title="title" :message="text" :duration="parseInt(duration)" :classes="String(classes)" :position="position" />
  </div>
</template>
<script>
export default {
  name: 'PluginNotification',
  props: ['group', 'title', 'text', 'duration', 'classes', 'position'],
  data: () => ({
  })
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
</style>
