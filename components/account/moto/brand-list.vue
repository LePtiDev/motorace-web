<template>
  <div class="grid grid-cols-3 gap-[16px]">
    <div
      v-for="brand in brands"
      :key="brand.id"
      class="border border-gray-300 rounded-[8px] flex items-center justify-center p-[12px] h-[180px] cursor-pointer hover:bg-gray-100"
      @click="selectBrand()"
    >
      <img class="" :src="`https://ggqknfrbbbqbrwybdmyl.supabase.co/storage/v1/object/public/moto/brands/${brand.name}.png`" />
    </div>
  </div>
</template>
<script lang="ts" setup>
const { $supabase } = useNuxtApp()

// Data
const brands = ref()
const selectedBrands = ref('')

// Functions
const fetchBrands = async () => {
  const { data: allBrands } = await $supabase.from('moto_brands').select()
  brands.value = allBrands
}

// Created
fetchBrands()
</script>
