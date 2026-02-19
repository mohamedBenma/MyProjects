<template>
  <div id="map"></div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
})

export default {
  name: 'Map',
  props: { lat: Number, lang: Number },

  data() {
    return {
      map: null,
      marker: null,
    }
  },

  mounted() {
    this.map = L.map('map').setView([this.lat, this.lang], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(this.map)

    this.marker = L.marker([this.lat, this.lang]).addTo(this.map)
  },

  watch: {
    lat() {
      this.updateMap()
    },
    lang() {
      this.updateMap()
    },
  },

  methods: {
    updateMap() {
      if (this.map && this.marker) {
        this.map.setView([this.lat, this.lang])
        this.marker.setLatLng([this.lat, this.lang])
      }
    },
  },
}
</script>

<style>
#map {
  flex: 1;
  width: 100%;
  min-height: 0;
  position: relative;
  z-index: 1;
}
</style>
