<template>
  <div ref="geocoding" class="mb-[16px] relative">
    <ui-input v-model="input" type="text" name="geocoding" :label="label" :placeholder="placeholder" hide-detail @update:model-value="search" />
    <div v-if="show" class="absolute left-0 right-0 bg-white shadow-md min-h-10 z-10 mt-[8px] p-[8px] rounded-[4px]">
      <div
        v-for="address in adresses"
        :key="address.id"
        class="p-[8px] cursor-pointer text-sm hover:bg-gray-50 rounded-[2px] truncate"
        @click="select(address)"
      >
        {{ address.name }}<span class="text-gray-400"> - {{ address.state }}</span>
        <span class="text-gray-400 text-xs"> - {{ address.postcode }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getGeocoding } from '~/api/graphhopper'

// Props & emits
const emits = defineEmits(['select'])
defineProps<{
  label?: string
  placeholder?: string
}>()

// Data
const input = ref('')
const adresses = ref([])
const show = ref(false)
const geocoding = ref()

// Methods
const select = (address: any) => {
  show.value = false
  input.value = address.name
  emits('select', {
    latitude: address.point.lat,
    longitude: address.point.lng,
    name: address.name,
    city: address.city,
    postcode: address.postcode,
    state: address.state,
  })
}
const search = async (text: string) => {
  if (text.length > 0) {
    adresses.value = await getGeocoding(text)
    show.value = true
  } else {
    show.value = false
  }
}

// Mounted
onMounted(() => {
  // For click out
  document.addEventListener('click', (event: any) => {
    if (event.target.contains(geocoding.value)) {
      show.value = false
    }
  })
})
</script>
