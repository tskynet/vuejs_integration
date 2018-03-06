<template>
  <div id="containerChart">
    <ChartItem v-bind:chartData="usersChart.data" v-bind:chartOptions="userCharts.options"></ChartItem>
  </div>
</template>
<script>
console.log(this.usersChart)
import ChartItem from '@/components/UI/DashBoard/ChartItem'
export default {
  name: 'ContainerChart',
  components: {
    ChartItem
  },
  data: () => ({
    usersChart: {
      data: {
        labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
        series: [
          [287, 385, 490, 562, 594, 626, 698, 895, 952],
          [67, 152, 193, 240, 387, 435, 535, 642, 744],
          [23, 113, 67, 108, 190, 239, 307, 410, 410]
        ]
      },
      options: {
        low: 0,
        high: 1000,
        showArea: true,
        height: '245px',
        axisX: {
          showGrid: false
        },
        showLine: true,
        showPoint: false
      }
    }
  })
}
</script>
<style scoped>
</style>
