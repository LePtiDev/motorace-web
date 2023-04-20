<template>
  <div class="w-full p-[24px] bg-white rounded-[8px] shadow flex flex-col">
    <div v-if="title" class="mb-[16px] text-xl flex items-center justify-between h-[36px]">
      <h2>{{ title }}</h2>
      <ui-button v-if="button" type="button" @click="emits('click')">{{ button }}</ui-button>
    </div>
    <slot />
  </div>
</template>
<script lang="ts" setup>
// Props & emits
defineProps<{
  title?: string
  button?: string
}>()

const emits = defineEmits(['click'])
</script>
