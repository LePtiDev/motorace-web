<template>
  <div
    class="lg:w-[50%] w-full h-screen bg-white flex items-center justify-center"
  >
    <div class="sm:w-[424px] w-full px-4">
      <h1 class="text-2xl mb-[24px] font-medium text-gray-700">Connexion</h1>

      <!-- Fields -->
      <ui-input
        label="Email"
        name="email"
        type="email"
        placeholder="jean.dupont@mail.com"
      />
      <ui-input
        label="Mot de passe"
        name="password"
        type="password"
        placeholder="************"
      />

      <!-- Forgot & Keep logged in -->
      <div class="flex justify-end mb-[24px]">
        <nuxt-link to="/auth/forgot" class="text-indigo-600 text-sm align-end"
          >Mot de passe oublié ?</nuxt-link
        >
      </div>

      <!-- Buttons -->
      <ui-button
        class="w-full"
        type="submit"
        @click="onSubmit"
        @keydown.enter="onSubmit"
      >
        Connexion
      </ui-button>

      <div class="flex mt-[8px] space-x-2">
        <!-- Google -->
        <ui-button class="w-full" color="secondary" @click="googleSignin()">
          <img
            class="w-[20px] mr-[8px]"
            src="@/public/assets/images/google.svg"
          />
          Google
        </ui-button>

        <!-- Apple -->
        <ui-button class="w-full" color="secondary" @click="appleSignin()">
          <img
            class="w-[20px] mr-[8px]"
            src="@/public/assets/images/apple.svg"
          />
          Apple
        </ui-button>
      </div>

      <!-- Have an account -->
      <p class="mt-[24px] text-sm text-gray-700 text-regular">
        Déjà un compte ?
        <nuxt-link to="/auth/signup" class="text-indigo-600"
          >C'est ici</nuxt-link
        >
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
// Imports
import * as yup from 'yup'
import { useForm } from 'vee-validate'

// Schema
const schema = yup.object({
  email: yup
    .string()
    .email("L'email n'est pas valide")
    .required("L'email est requis"),
  password: yup.string().required('Le mot de passe est requis'),
})

// Composable
const { handleSubmit } = useForm({
  validationSchema: schema,
})
const { $supabase } = useNuxtApp()
const router = useRouter()

// Functions
const onSubmit = handleSubmit(async (values) => {
  const { data, error } = await $supabase.auth.signInWithPassword({
    email: values.email,
    password: values.password,
  })
  if (data) {
    router.push('/auth/new-user')
  }
})
const googleSignin = async () => {
  const { data, error } = await $supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3010/auth/new-user',
    },
  })
}
const appleSignin = async () => {
  const { data, error } = await $supabase.auth.signInWithOAuth({
    provider: 'apple',
    options: {
      redirectTo: 'http://localhost:3010/auth/new-user',
    },
  })
}
</script>
