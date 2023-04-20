<template>
  <div>{{ data }}</div>
</template>
<script lang="ts" setup>
// Composable
const { $supabase } = useNuxtApp()

// Fetch data
const { data, pending } = await useAsyncData(async () => {
  const trips = await $supabase.from('trips').select()
  return trips.data
})
</script>
