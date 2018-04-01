<template>
  <div id="map">
    <div class="container">

      <h4>
        Google Maps
      </h4>

      <map-location-selector :latitude="ADD_INITIAL_LATITUDE" :longitude="ADD_INITIAL_LONGITUDE">
      </map-location-selector>
    </div>
  </div>
</template>
<script>
import mapLocationSelector from 'vue-google-maps-location-selector'
export default {
  name: 'Map',
  components: {
    mapLocationSelector
  },
  data: () => ({
    ADD_INITIAL_LATITUDE: 40.748817,
    ADD_INITIAL_LONGITUDE: -73.985428
  }),
  methods: {
    locationUpdated (latlng) {
      this.latitude = latlng.lat
      this.longitude = latlng.lng
    }
  }
}
</script>
<style scoped>
</style>
