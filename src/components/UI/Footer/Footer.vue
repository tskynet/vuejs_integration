<template>
  <div id="footer">
    <div class="container-fluid">
      <nav>
        <p>
          <a class="active">Dashboard</a>
        </p>
      </nav>

      <div class="mention">

        <p>
          © Coded with <i class="ti-heart"></i> by <a href="https://github.com/tskynet" target="_blank">Tskynet</a>. Designed by <a href="https://www.creative-tim.com/?ref=pdf-vuejs" target="_blank">Creative Tim</a>.
        </p>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data: () => ({

  })
}
</script>
<style scoped>
#footer{
  font-size:14px;
}
#footer .container-fluid nav{
  float:left;
}
#footer .container-fluid .mention{
  float:right;
}
#footer .container-fluid p{
  padding: 10px 15px;
  margin: 15px 3px 15px 0;
  display:block;
}
#footer .container-fluid .mention i{
  color:red;
}

</style>
