<template>
  <div class="card">
    <b-container class="content">
      <b-row md="auto">
        <b-col class="colIcon" cols="5">
          <i :class="icon" :style="colorIcon"></i>
        </b-col>
        <b-col cols="7">
          <div class="title">
            <p>{{ valueName }}</p>
            <span>{{ valueText }}</span>
          </div>
        </b-col>
      </b-row>
      <hr>
      <footer>
        <!-- <icon class="iconFooter" name="clock-o"></icon> -->
        <i :class="smallIcon" class="iconFooter"></i>
        <span>{{ cardText }}</span>
      </footer>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.use(Icon)
export default {
  name: 'Card',
  // Ce Component accepte les propriétés suivantes:
  props: ['valueText', 'cardText', 'valueName', 'icon', 'colorIcon', 'smallIcon'],
  data: () => ({
    isTrue: true
  }),
  components: {
    Icon
  }
}
console.log(this.icon)
</script>

<style scoped>
.card{
  font-size:22px;
  color:black;
  clear:both;
  margin-bottom:20px;
}
.card hr{
  margin:0 0;
}
.card .content{
  padding : 15px 15px 10px 15px;
}
.card .container{
  max-width: none !important;
}
.card .container .colIcon{
  text-align:center;
}
.card .container .title{
  text-align:right;
  color : rgb(37,36,34);
  font-size:16px;
}
.card .container .title p{
  margin: 0 0;
}
.card .container .title span{
  font-size:28px;
}
.card i{
  font-weight:bold;
  color:rgb(243,187,69);
  font-size:2em;
}
.card footer{
  font-size:14px;
  min-height:30px;
  color:rgb(169,169,169);
}
.card footer .iconFooter{
  vertical-align:-70%;
  font-size: 14px;
  color:rgb(169,169,169);
}
.card footer span{
  vertical-align:-50%;
}
.card .caption {
  font-size: 80% !important;
  color: rgb(220, 120, 80);
}
</style>
