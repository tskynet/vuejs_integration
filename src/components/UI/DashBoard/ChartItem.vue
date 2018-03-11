<template>
  <div id="chartItem">
    <h2>test</h2>
    <h3> {{ data }}</h3>
    <hr  />
    <line></line>
  </div>
</template>
<script>
import { Line } from 'vue-chart-js'
export default {
  name: 'ChartItem',
  extends: Line,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
<style scoped>
#chartItem h2{
  font-size:22px;
  color:black;
}
</style>
