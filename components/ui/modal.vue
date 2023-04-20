<template>
  <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center p-[16px]">
    <div class="absolute top-0 left-0 h-full w-full bg-gray-900 opacity-20 z-10" @click="emits('close')"></div>
    <div class="bg-white rounded-[8px] z-20 w-full sm:w-[624px] shadow">
      <div class="flex items-center justify-between p-[24px]">
        <h2 v-if="title" class="text-lg">{{ title }}</h2>
        <XMarkIcon class="text-gray-400 h-[24px] cursor-pointer" @click="emits('close')" />
      </div>
      <div class="px-[24px] pb-[24px] overflow-auto h-[400px]">
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'

const props = defineProps<{
  title: string
}>()

const emits = defineEmits(['close'])
</script>
