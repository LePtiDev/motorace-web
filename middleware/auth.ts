import { setAuth, checkIfUserExist } from '@/composables/supabase/useAuth'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $supabase } = useNuxtApp()
  const session: any = await $supabase.auth.getSession()
  const store = useState('redirect')
  store.value = to.path

  if (!session.data.session) {
    return navigateTo('/auth/signin')
  } else {
    await setAuth()
    if (to.fullPath === '/auth/new-user') {
      const exist = await checkIfUserExist()
      if (exist) return navigateTo('/dashboard')
    } else {
      const exist = await checkIfUserExist()
      if (!exist) return navigateTo('/auth/new-user')
    }
  }
})
