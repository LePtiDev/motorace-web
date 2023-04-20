<template>
  <div>
    <div>
      <ui-input
        name="firstname"
        type="text"
        label="Prénom"
        placeholder="Jean"
        :model-value="user.firstname"
      />
      <ui-input
        name="lastname"
        type="text"
        label="Nom"
        placeholder="Dupont"
        :model-value="user.lastname"
      />
    </div>

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

// Schema
const schema = yup.object({
  firstname: yup.string().required('Le prénom est requis'),
  lastname: yup.string().required('Le nom est requis'),
})

// Composable
const { $supabase } = useNuxtApp()
const { handleSubmit } = useForm({
  validationSchema: schema,
})

// Submit
const onSubmit = handleSubmit(async (values) => {
  const { data } = await $supabase
    .from('users')
    .update(values)
    .eq('user_id', props.user.user_id)
    .select()
    .single()

  user.value = data
})
</script>
