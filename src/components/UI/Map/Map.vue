<template>
  <div id="map">
    <div class="container">
      <h2>hi all</h2>
      <div class="containerMap">
        <l-map style="height:350px" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="marker"></l-marker>
        </l-map>
      </div>
    </div>
  </div>
</template>
<script>
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet'
export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data: () => ({
    zoom: 13,
    center: [
      47.413220,
      -1.219482
    ],
    url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    marker: [
      47.413220,
      -1.219482
    ]
  })
}
</script>
<style scoped>
#map .containerMap{
  width : 90%;
  overflow:hidden;
}
</style>
