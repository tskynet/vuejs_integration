<template>
  <div id="containerChart"  style="position: relative; height:300px; width:100%">
    <chart-item v-bind:data="this.usersChart.data" v-bind:options="this.usersChart.options" ></chart-item>
  </div>
</template>
<script>
import ChartItem from '@/components/UI/DashBoard/ChartItem'

const LINE_CHART_DATA_DEFAULT = {
  labels: ['0', '5', '7.5', '10', '11', '12', '13', '15'],
  datasets: [{
    label: 'SES 3.4',
    borderColor: '#0088FF',
    data: ['128.940', '131.397', '132.235', '128.235', '125.636', '127.271', '125.667', '129.554']
  }, {
    label: 'SES 8.9',
    borderColor: '#FF8800',
    data: ['127.283', '125.147', '124.489', '116.783', '111.696', '110.563', '105.469', '104.332']
  }]
}
export default {
  name: 'ContainerChart',
  components: {
    ChartItem
  },
  data: () => ({
    usersChart: {
      data: LINE_CHART_DATA_DEFAULT,
      options: {
        responsive: true,
        maintainAspectRatio: true
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
#containerChart #line-chart{
  width:100%;
  height: 300px;
}
</style>
