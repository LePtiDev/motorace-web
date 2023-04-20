<template>
  <div class="grid grid-cols-2 gap-[16px]">
    <!-- User informations -->
    <ui-card title="Mes informations">
      <account-informations :user="user" />
    </ui-card>

    <!-- User details -->
    <ui-card title="Mes coordonées">
      <contact-details :user="user" />
    </ui-card>

    <!-- Moto -->
    <!--    <ui-card class="col-span-2" title="Mes motos" button="Ajouter" @click="motoModal = true">
      <account-moto />
      <account-moto-modal v-model="motoModal" />
    </ui-card>-->
  </div>
</template>
<script lang="ts" setup>
import ContactDetails from '~/components/account/contact-details.vue'

// Meta
definePageMeta({
  middleware: ['auth'],
})

// Data
const user = useState<User>('user')
const motoModal = ref(false)
</script>
