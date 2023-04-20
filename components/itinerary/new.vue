<template>
  <div class="flex justify-between flex-col h-full">
    <div>
      <button-group v-model="selectedType" label="Votre type d'itinéraire" :items="types" class="mb-[16px]" />
      <div v-if="selectedType === 'trip'">
        <itinerary-input-geocooding label="Départ" @select="setPoint('departure', $event)" />
        <itinerary-input-geocooding label="Arrivée" @select="setPoint('arrival', $event)" />
      </div>
    </div>
    <ui-button v-if="itinerary.departure && itinerary.arrival" class="w-full" color="primary" @click="calculItinerary()">Calculer</ui-button>
  </div>
</template>
<script lang="ts" setup>
// Data
import ButtonGroup from '~/components/ui/button-group.vue'
import { itinerary } from '~/Models/itinerary'

// Data
const types = ref<Items[]>([
  {
    id: 'trip',
    title: 'Itinéraire',
  },
  {
    id: 'ride',
    title: 'Balade',
  },
  {
    id: 'boucle',
    title: 'Boucle',
  },
])
const selectedType = ref<string>('')

// Methods
const setPoint = (type: 'departure' | 'arrival', address: GPSPoint) => {
  if (type === 'departure') itinerary.setDeparture(address)
  if (type === 'arrival') itinerary.setArrival(address)
}

const calculItinerary = async () => {
  if (selectedType.value === 'trip') {
    await itinerary.calcNormalItinerary()
    await itinerary.showItinerary()
  }
}
</script>
