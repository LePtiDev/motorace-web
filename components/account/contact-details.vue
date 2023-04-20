<template>
  <div>
    <ui-input name="email" type="text" label="Email" placeholder="jean.dupont@mail.com" :model-value="user.email" />

    <div class="flex justify-end">
      <ui-button @click="onSubmit">Mettre à jour</ui-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import * as yup from 'yup'
import { useForm } from 'vee-validate'

// Props
const props = defineProps<{
  user: User
}>()
const user = useState('user')
const toast = useState<Toast>('toast')

// Schema
const schema = yup.object({
  email: yup.string().email("L'email doit être valide").required("L'email est requis"),
})

// Composable
const { $supabase } = useNuxtApp()
const { handleSubmit } = useForm({
  validationSchema: schema,
})

// Submit
const onSubmit = handleSubmit(async (values) => {
  const config = useRuntimeConfig()
  const { data: userWithThisEmail } = await $supabase.from('users').select().eq('email', values.email).single()
  if (userWithThisEmail) {
    console.log('il y a déjà un compte avec cette email')
  } else {
    await $supabase.auth.updateUser({ email: values.email }, { emailRedirectTo: `${config.public.url}/account` })
    toast.value = {
      status: true,
      type: 'success',
      title: 'Email envoyé',
      message: 'Un email de confirmation à été envoyé sur votre nouvelle adresse email',
    }
  }
})

const changeEmail = async () => {
  try {
    const { data: newUser } = await $supabase.from('users').update(values).eq('user_id', props.user.user_id).select().single()
    user.value = newUser
  } catch (error) {
    console.log('Une erreur ses produite')
  }
}
</script>
