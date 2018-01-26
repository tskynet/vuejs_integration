<template>
  <div id="ContainerCard">
    <b-container>
      <b-row>
        <b-col xl="3">
          <card></card>
        </b-col>
        <b-col xl="3">
        </b-col>
        <b-col xl="3">
        </b-col>
        <b-col xl="3">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Vue from 'vue'
import Card from '@/components/UI/DashBoard/Card'
Vue.use(Card)
export default {
  name: 'ContainerCard',
  data: () => ({

  })
}
</script>
<style scoped>
</style>
