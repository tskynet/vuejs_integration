<template>
  <div id="containerCard">
    <b-container class="containerCards">
      <b-row class="rowCards">
        <b-col lg="3" sm="6">
        <card v-bind:cardText="updatedText[0]" v-bind:valueText="valueText[0]" v-bind:valueName="valueName[0]" v-bind:icon="icon[0]" v-bind:colorIcon="color[0]"></card>
        </b-col>
        <b-col lg="3" sm="6">
          <card v-bind:cardText="updatedText[1]" v-bind:valueText="valueText[1]" v-bind:valueName="valueName[0]" v-bind:icon="icon[1]" v-bind:colorIcon="color[1]"></card>
        </b-col>
        <b-col lg="3" sm="6">
          <card v-bind:cardText="updatedText[2]" v-bind:valueText="valueText[2]" v-bind:valueName="valueName[0]" v-bind:icon="icon[2]" v-bind:colorIcon="color[2]"></card>
        </b-col>
        <b-col lg="3" sm="6">
          <card v-bind:cardText="updatedText[3]" v-bind:valueText="valueText[3]" v-bind:valueName="valueName[0]" v-bind:icon="icon[3]" v-bind:colorIcon="color[3]"></card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Card from '@/components/UI/DashBoard/Card'

export default {
  name: 'ContainerCard',
  components: {
    Card
  },
  data: () => ({
    updatedText: ['updated now', 'Last day', 'in the last hour', 'updated now'],
    valueName: ['Capacity', 'Revenue', 'Errors', 'Followers'],
    valueText: ['105GB', '$1,345', '23', '+45'],
    icon: ['ti-server', 'ti-wallet', 'ti-pulse', 'ti-twitter-alt'],
    color: ['color:#F5BB45', 'color:#41B883', 'color:#EF6E28', 'color:#68B3C9']
  })
}
</script>

<style scoped>
#containerCard .containerCards{
  max-width:none;

}
#containerCard .containerCards .rowCards{
  max-width:none;
  width:100%;
}
</style>
