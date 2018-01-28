<template>
  <div class="card">
    <b-container class="content">
      <b-row md="auto">
        <b-col class="colIcon" cols="5">
          <icon class="iconCard" name="database"></icon>
        </b-col>
        <b-col cols="7">
          <div class="title">
            <p>Capacity</p>
            <span>105GB</span>
          </div>
        </b-col>
      </b-row>
      <hr>
      <footer>
        <icon class="iconFooter" name="clock-o"></icon>
        <span>Last Day</span>
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
  data: () => ({

  }),
  components: {
    Icon
  }
}
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
.card .iconCard{
  font-weight:bold;
  color:rgb(243,187,69);
  width:50px;
  height:45px;
}
.card footer{
  font-size:14px;
  min-height:30px;
  color:rgb(169,169,169);
}
.card footer .iconFooter{
  height:20px;
  width:16px;
  vertical-align:-70%;
}
.card footer span{
  vertical-align:-50%;
}
</style>
