<template>
  <div id="pluginNotification">
    <div class="content">

      <b-row>
        <b-col md="2">

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
  padding: 10px 10px 10px 20px;
  width: 350px;

}
#pluginNotification .content{

  height:60px;
  background-color:rgb(34, 152, 99);
  border-radius:4px;
  box-sizing:border-box;
}
#pluginNotification .content .row{
  width:100%;

}
#pluginNotification .content .row .test{
  display:block;
  font-size:14px;


}
</style>
