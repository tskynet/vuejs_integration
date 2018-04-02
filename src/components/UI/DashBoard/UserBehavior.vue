<template>
  <div id="userBehavior">
    <div class="content">
      <div class="main">
        <ContainerChart></ContainerChart>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import VueChart from 'vue-chartjs'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import ContainerChart from '@/components/UI/DashBoard/containerChart'
Vue.use(Icon)
Vue.use(VueChart)
export default {
  name: 'userBehavior',
  components: {
    VueChart,
    Icon,
    ContainerChart
  },
  data: () => ({
  })
}
</script>
<style scoped>
#userBehavior{
  font-size:14px;
  border-radius : 6px;
  padding: 15px 15px 10px 15px;
}
#userBehavior header{
  padding : 20px 20px 0px 20px;
}
#userBehavior header .title{
  font-weight: 300;
  line-height:25.2px;
  font-size:21px;
  color: rgb(37, 36, 34);
}
#userBehavior header p{
  color: rgb(154, 154, 154);
}
</style>
