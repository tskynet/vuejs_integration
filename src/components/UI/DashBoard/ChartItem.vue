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
    initChartItem () {
      var idChart = 'chartTest'
      console.log(idChart)
      this.$ChartList[this.chartType](idChart, this.chartData, this.chartOption)
    }
  },
  mounted () {
    this.initChartItem()
  },
  props: {
    testing: 'test',
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
          labels: [],
          series: []
        }
      }
    }
  }
}
</script>
<style scoped>
#chartItem h2{
  font-size:22px;
  color:black;
}
</style>
