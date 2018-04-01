<template>
  <div id="containerChart">
    <header>
      <p class="title">User Behavior</p>
      <p>24 Hours performance</p>
    </header>
    <div class="">
      <chart-line-item v-bind:data="this.usersChart.data" v-bind:options="this.usersChart.options" ></chart-line-item>
      <div class="footer">
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
      </div>
    </div>
    <b-row>
      <b-col md="6" xs="12">
        <chart-donut-item v-bind:data="this.emailChart.data" v-bind:options="this.emailChart.options"></chart-donut-item>
        <div class="footer">
          <div>
            <icon name="circle" class="circle"></icon>
            <span>Open</span>
            <icon name="circle" class="circle"></icon>
            <span>Bounce</span>
            <icon name="circle" class="circle"></icon>
            <span>Unsubscribe</span>
          </div>
          <hr>
          <div class="update">
            <icon class="iconFooter" name="clock-o"></icon>
            <span>Updated 3 minutes ago</span>
          </div>
        </div>
      </b-col>

      <b-col md="6" xs="12">
        <chart-bar-item v-bind:data="this.barChart.data" v-bind:options="this.barChart.options"></chart-bar-item>
        <div class="footer">
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
        </div>
      </b-col>
    </b-row>

  </div>
</template>
<script>
import ChartLineItem from '@/components/UI/DashBoard/Chart/ChartLineItem'
import ChartDonutItem from '@/components/UI/DashBoard/Chart/ChartDonutItem'
import ChartBarItem from '@/components/UI/DashBoard/Chart/ChartBarItem'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import Vue from 'vue'
Vue.use(Icon)
const LINE_CHART_DATA_DEFAULT = {
  labels: ['0', '5', '7.5', '10', '11', '12', '13', '15'],
  datasets: [{
    label: 'SES 3.4',
    borderColor: '#0088FF',
    borderWidth: 0,
    data: ['128.940', '131.397', '132.235', '128.235', '125.636', '127.271', '125.667', '129.554']
  }, {
    label: 'SES 8.9',
    borderColor: '#FF8800',
    borderWidth: 0,
    data: ['127.283', '125.147', '124.489', '116.783', '111.696', '110.563', '105.469', '104.332']
  }]
}
const BAR_CHART_DATA_DEFAULT = {
  labels: ['0', '10', '20', '30', '40', '50'],
  datasets: [{
    label: 'Title',
    data: [10, 20, 30, 40, 50],
    backgroundColor: ['#F3BB45', '#EB5E28', '#68B3C8', '#F3BB45', '#EB5E28']
  }]
}
const DONUT_CHART_DATA_DEFAULT = {
  datasets: [{
    borderColor: '#0088FF',
    data: ['32', '6', '62'],
    backgroundColor: ['#F3BB45', '#EB5E28', '#68B3C8']
  }]
}
export default {
  name: 'ContainerChart',
  components: {
    ChartLineItem,
    ChartDonutItem,
    Icon,
    ChartBarItem
  },
  data: () => ({
    usersChart: {
      data: LINE_CHART_DATA_DEFAULT,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    },
    emailChart: {
      data: DONUT_CHART_DATA_DEFAULT,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 50
      }
    },
    barChart: {
      data: BAR_CHART_DATA_DEFAULT,
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }),
  created () {
    console.log('!!ContainerChart usersCharts=', this.usersChart)
  },
  mounted () {
    document.getElementById('line-chart').style.height = '245px'
  }
}
</script>
<style scoped>
#containerChart{
  font-size:14px;
  background: white;
  border-radius : 6px;
  box-shadow : 0 2px 2px rgba(204, 197, 185, 0.5);
  padding: 15px 15px 10px 15px;
}
#containerChart header{
  padding : 20px 20px 0px 20px;
}
#containerChart header .title{
  font-weight: 300;
  line-height:25.2px;
  font-size:21px;
  color: rgb(37, 36, 34);
}
#containerChart header p{
  color: rgb(154, 154, 154);
}
#containerChart .main{
  height: 245px;
}
#containerChart .main .chart{
  height: 245px;
}
#containerChart #line-chart{
  width:100%;
}
#containerChart .footer{
  font-size: 14px;
}
#containerChart .footer hr{
  margin : 5px 0 5px 0;
}
#containerChart .footer .circle{
  width: 21px;
  height:14px;
}
#containerChart .footer .circle:nth-child(1){
  color : #81CDEC;
}
#containerChart .footer .circle:nth-child(2){
  color : #EB5E28;
}
#containerChart .footer .circle:nth-child(3){
  color : ##F3BB45;
}
#containerChart .footer .update{
  color : rgb(169, 169, 169);
}
#containerChart .footer .update .iconFooter{
  height:20px;
  width:16px;
  vertical-align:-70%;
}
#containerChart .footer .update span{
  vertical-align:-50%;
}
</style>
