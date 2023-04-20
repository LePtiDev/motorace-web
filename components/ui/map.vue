<template>
  <div id="map"></div>
</template>
<script lang="ts" setup>
// Imports
// @ts-ignore
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import { itinerary } from '~/Models/itinerary'

// Emits
const emits = defineEmits(['map-ready'])

// Data
const runtimeConfig = useRuntimeConfig()
const map = ref()

// Mounted
onMounted(() => {
  mapboxgl.accessToken = runtimeConfig.public.mapboxApiKey
  map.value = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
  })
  map.value.flyTo({
    center: [2.213749, 46.227638],
    duration: 2000,
    zoom: 5,
  })
  itinerary.setMap(map.value)
})
</script>
<style>
#map {
  height: 100%;
}
</style>
