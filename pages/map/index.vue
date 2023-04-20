<template>
  <div class="grid grid-cols-6 gap-[16px] h-full">
    <ui-card class="col-span-4">
      <ui-map />
    </ui-card>
    <ui-card class="col-span-2" title="Nouvel itinéraire">
      <itinerary-new />
    </ui-card>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
})
</script>
