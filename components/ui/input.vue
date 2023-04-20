<template>
  <div class="w-full" :class="[hideDetail ? '' : 'mb-[24px]']">
    <label v-if="label" :for="name" :class="errorMessage ? 'text-red-500' : 'text-gray-500'" class="font-medium text-sm mb-[8px] block">
      {{ label }}
    </label>
    <div class="w-full relative">
      <!-- icon -->
      <input
        :id="name"
        v-model="value"
        :name="name"
        :class="[
          getPadding,
          errorMessage ? 'border-red-600 focus:border-red-600 focus:ring-red-100' : 'border-gray-200 focus:border-indigo-600 focus:ring-indigo-100',
        ]"
        :placeholder="placeholder"
        class="shadow h-[36px] autofill:bg-white outline-none focus:ring-[1px] ring-offset-0 focus:shadow-none border-[1px] w-full text-[14px] text-gray-700 rounded-[4px]"
        :type="type"
      />
      <span class="absolute right-0 top-[38px] text-red-500 text-sm">{{ errorMessage }}</span>
      <!-- icon -->
    </div>
  </div>
</template>
<script lang="ts" setup>
// Imports
import { useField } from 'vee-validate'

// Props
const emits = defineEmits(['update:modelValue'])
const props = defineProps<{
  type: string
  name: string
  iconLeft?: string
  iconRight?: string
  hideDetail?: boolean
  label?: string
  placeholder?: string
  modelValue?: string
}>()

// Computed
const getPadding = computed(() => {
  if (props.iconLeft) {
    return ''
  } else if (props.iconRight) {
    return ''
  } else {
    return 'px-[8px]'
  }
})

// Data
let { value, errorMessage } = useField(props.name)

onMounted(() => {
  props.modelValue ? (value.value = props.modelValue) : ''
})
</script>
