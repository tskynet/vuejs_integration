<template>
  <div id="tableListContainer">
    <b-row>
      <b-col md="12">
        <StrippedTable></StrippedTable>
      </b-col>
      <b-col md="12">
        <StrippedTable></StrippedTable>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import StrippedTable from '@/components/UI/TableList/StrippedTable'
export default {
  name: 'TableListContainer',
  components: {
    StrippedTable
  },
  data: () => ({

  })
}
</script>
<style scoped>
#tableListContainer .row{
  width:100%;
  margin:0;
  padding:0 15px 0 15px;
}
#tableListContainer .row .col-md-12{
  margin-bottom:20px;
}
</style>
