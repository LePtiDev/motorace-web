<template>
  <div>
    <label v-if="label" class="font-medium text-sm mb-[8px] block text-gray-500">
      {{ label }}
    </label>
    <div :class="`w-full bg-gray-100 h-[44px] rounded-[8px] grid grid-cols-${items.length} p-[4px] gap-x-[8px]`">
      <div
        v-for="item in items"
        :key="item.id"
        :class="modelValue === item.id ? 'bg-white border border-gray-200' : 'hover:bg-gray-50 border-transparent'"
        class="flex items-center justify-center cursor-pointer border rounded-[4px] text-gray-700 text-sm"
        @click="emits('update:modelValue', item.id)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// Props and emits
defineProps<{
  modelValue: string
  items: Items[]
  label?: string
}>()
const emits = defineEmits(['update:modelValue'])
</script>
