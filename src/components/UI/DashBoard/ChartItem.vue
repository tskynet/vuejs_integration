<template>
  <div id="chartItem">
    <h2>test</h2>
    <svg id="chartTest" class="ct-chart-line"></svg>
  </div>
</template>
<script>
export default {
  name: 'ChartItem',
  methods: {
    initChart () {
      var idChart = 'chartTest'
      this.$ChartList[this.chartType](idChart, this.chartData, this.chartOption)
    }
  },
  data: () => ({
    chartType: {
      type: String,
      default: 'Line'
    },
    chartOptions: {
      type: Object,
      default: () => {
        return {}
      }
    },
    chartData: {
      type: Object,
      default: () => {
        return {
          labels: ['Monday', 'Tuesday', 'Wednesday'],
          series: [12, 9, 7]
        }
      }
    }
  }),
  mounted () {
    this.$nextTick(this.initChartItem)
  }
}
</script>
<style scoped>
#chartItem h2{
  font-size:22px;
  color:black;
}
</style>
