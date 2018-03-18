<template>
  <div id="userBehavior">
    <header>
      <p class="title">User Behavior</p>
      <p>24 Hours performance</p>
    </header>
    <div class="main">
      <ContainerChart></ContainerChart>
    </div>
    <footer>
      <div>
        <icon name="circle" class="circle"></icon>
        <span>Open</span>
        <icon name="circle" class="circle"></icon>
        <span>Click</span>
        <icon name="circle" class="circle"></icon>
        <span>Click Second Time</span>
      </div>
      <hr>
      <div class="update">
        <icon class="iconFooter" name="clock-o"></icon>
        <span>Updated 3 minutes ago</span>
      </div>
    </footer>
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
  background: white;
  border-radius : 6px;
  box-shadow : 0 2px 2px rgba(204, 197, 185, 0.5);
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
#userBehavior .main{
  height: 245px;
}
#userBehavior .main .chart{
  height: 245px;
}
#userBehavior footer{
  font-size: 14px;
}
#userBehavior footer hr{
  margin : 5px 0 5px 0;
}
@userBehavior footer .circle{
  width: 21px;
  height:14px;
}
#userBehavior footer .circle:nth-child(1){
  color : #81CDEC;
}
#userBehavior footer .circle:nth-child(2){
  color : #EB5E28;
}
#userBehavior footer .circle:nth-child(3){
  color : #F3BB45;
}
#userBehavior footer .update{
  color : rgb(169, 169, 169);
}
#userBehavior footer .update .iconFooter{
  height:20px;
  width:16px;
  vertical-align:-70%;
}
#userBehavior footer .update span{
  vertical-align:-50%;
}
</style>
