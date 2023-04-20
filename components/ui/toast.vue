<template>
  <Transition>
    <div v-if="toast?.status" class="absolute bottom-[16px] right-[16px] bg-white shadow w-[500px] p-[16px] flex">
      <div>
        <div class="h-[40px] w-[40px] rounded-full flex justify-center items-center mr-[16px]" :class="getColor">
          <CheckCircleIcon class="text-green-400 h-[24px] w-[24px]" />
        </div>
      </div>
      <div>
        <p class="text-md text-gray-700">{{ toast.title }}</p>
        <p class="text-sm text-gray-500">{{ toast.message }}</p>
      </div>
      <div class="cursor-pointer" @click="toast.status = false">
        <XMarkIcon class="text-gray-400 h-[24px] w-[24px]" />
      </div>
    </div>
  </Transition>
</template>
<script lang="ts" setup>
// Imports
import { CheckCircleIcon, XMarkIcon } from '@heroicons/vue/24/outline'

// Props
import Toast from '~/components/ui/toast.vue'

// Data
const show = ref(false)
const toast = useState<Toast | null>('toast')

// Computed
const getColor = computed(() => {
  if (toast.value?.type === 'success') {
    return 'bg-teal-100'
  } else if (toast.value?.type === 'error') {
    return 'bg-red-100'
  } else if (toast.value?.type === 'information') {
    return 'bg-indigo-100'
  } else {
    return 'bg-teal-100'
  }
})

watch(toast, () => {
  setTimeout(() => {
    toast.value = null
  }, 3000)
})
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100%);
}
</style>
