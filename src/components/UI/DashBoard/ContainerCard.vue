<template>
  <div id="containerCard">
    <b-container class="containerCards">
      <b-row class="rowCards">
        <b-col lg="3" sm="6">
        <card></card>
        </b-col>
        <b-col lg="3" sm="6">
          <card></card>
        </b-col>
        <b-col lg="3" sm="6">
          <card></card>
        </b-col>
        <b-col lg="3" sm="6">
          <card></card>
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
  components: {
    Card
  },
  data: () => ({

  })
}
</script>
<style scoped>
#containerCard .containerCards{
  max-width:none;
}
#containerCard .containerCards .rowCards{
  max-width:none;
}
</style>
