<template>
  <div id="strippedTable">
    <div class="header">
      <h4>Stripped Table</h4>
      <span>Here is a subtitle for this table</span>
    </div>
    <div class="tableContent">
      <b-table stripped hover :items="items"></b-table>
    </div>


  </div>
</template>
<script>
export default {
  name: 'StrippedTable',
  data: () => ({
    items: [
      { id: 1, name: 'Dakota Rice', salary: '$36.738', country: 'Niger', city: 'Oud-Turnhout' },
      { id: 2, name: 'Minerva Hooper', salary: '$23.789', country: 'Curaçao', city: 'Sinaai-Waas' },
      { id: 3, name: 'Sage Rodriguez', salary: '$56.142', country: 'Netherlands', city: 'Baileux' },
      { id: 4, name: 'Philip Chaney', salary: '$38.735', country: 'Korea, South', city: 'Overland Park' },
      { id: 5, name: 'Doris Greene', salary: '$63.542', country: 'Malawi', city: 'Feldkirchen in Kärnten' }
    ]
  })
}
</script>
<style scoped>
#strippedTable{
  background:white;
  box-shadow:0 2px 2px rgba(204, 197, 185, 0.5);
  border-radius:6px;
}
#strippedTable .header{
  padding:20px 20px 0 20px;
}
#strippedTable .header h4{
  margin:0;
}
#strippedTable .header span{
  font-size:14px;
}
#strippedTable .tableContent{
  font-size:14px;
  color:black;
}
#strippedTable .table{
  margin:0;
}
</style>
