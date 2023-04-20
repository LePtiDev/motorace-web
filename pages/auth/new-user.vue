<template>
  <div class="flex min-h-full flex-col h-screen w-screen justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700">On aimerais en savoir plus 😛</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <!-- Fields -->
        <ui-input label="Prénom" name="firstname" type="text" placeholder="Jean"/>
        <ui-input label="Nom" name="lastname" type="text" placeholder="Dupont"/>

        <ui-button class="w-full" type="submit" @click="onSubmit">Valider</ui-button>
      </div>
    </div>
  </div>

</template>
<script lang="ts" setup>
// Imports
import * as yup from "yup";
import { useForm } from "vee-validate";
import {createUser} from "@/composables/supabase/useAuth"

// Schema
const schema = yup.object({
  firstname: yup.string().required("L'email est requis"),
  lastname: yup.string().required("Le mot de passe est requis")
});

// Meta
definePageMeta({
  layout: 'guest',
  middleware: ["auth"]
})

// Composable
const router = useRouter()
const { handleSubmit } = useForm({
  validationSchema: schema,
});

// Functions
const onSubmit = handleSubmit( async (values) => {
  createUser(values)
  router.push('/dashboard')
});

</script>