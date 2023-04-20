import { setAuth } from '@/composables/supabase/useAuth'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $supabase } = useNuxtApp()
  const session: any = await $supabase.auth.getSession()

  console.log(session)
  if (session.data.session !== null) {
    await setAuth()
  }
})
