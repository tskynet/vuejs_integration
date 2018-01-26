<template>
  <div class="card">
    <b-container class="content">
      <b-row md="auto">
        <b-col cols="5">
          ICON
        </b-col>
        <b-col cols="7">
          <div class="title">
            <p>Capacity</p>
            <span>105GB</span>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'Card',
  data: () => ({

  })
}
</script>
<style scoped>
.card{
  font-size:22px;
  color:black;
  clear:both;
}
.card .content{
  padding : 15px 15px 10px 15px;
}
.card .container{
  max-width: none !important;
}
.card .container .title{
  text-align:right;
}
</style>
