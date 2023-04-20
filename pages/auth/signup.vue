<template>
  <div class="flex">
    <img
      alt="photo de moto"
      class="w-[50%] h-screen object-cover lg:block hidden"
      src="https://img.freepik.com/photos-gratuite/moto-rouge-route_114579-5071.jpg?w=2000&t=st=1679678576~exp=1679679176~hmac=8036393ffc4a129347be27f5c63fe6be049a029e9f452f26869ad2443e04496d"
    />
    <auth-form-signup/>
  </div>
</template>
<script lang="ts" setup>
// Meta
definePageMeta({
  layout: 'guest',
})
</script>
