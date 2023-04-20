<template>
  <button
    :type="type ? type : 'button'"
    :class="getColor"
    @click="emits('click')"
  >
    <slot />
  </button>
</template>
<script lang="ts" setup>
// Props & emits
const props = defineProps<{
  type?: 'button' | 'submit'
  color?: 'primary' | 'secondary' | 'terciary'
}>()
const emits = defineEmits(['click'])

// Computed
const getColor = computed(() => {
  if (props.color === 'primary' || !props.color) {
    return 'inline-flex block items-center h-[36px] justify-center rounded-[4px] px-4 bg-indigo-600 text-sm font-regular text-white shadow-sm hover:bg-indigo-400'
  } else if (props.color === 'secondary') {
    return 'inline-flex block items-center h-[36px] border-[1px] border-gray-300 px-4  justify-center rounded-[4px] bg-white text-sm font-regular text-gray-700 shadow-sm hover:bg-gray-50'
  }
})
</script>
