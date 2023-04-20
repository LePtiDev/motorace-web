<template>
  <div class="bg-gray-50">
    <ui-navbar class="absolute w-full bg-white" />
    <div class="flex justify-center w-full">
      <div class="p-[32px] pt-[96px] max-w-[1400px] w-full min-h-screen">
        <slot />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
