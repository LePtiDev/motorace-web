<template>
  <ui-modal v-if="modelValue" title="Ajouter une moto" @close="emits('update:modelValue', false)">
    <account-moto-brand-list />
  </ui-modal>
</template>
<script lang="ts" setup>
// Props & emits
defineProps<{
  modelValue: boolean
}>()
const emits = defineEmits(['update:modelValue'])

const step = ref('brand')
</script>
