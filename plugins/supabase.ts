import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  // Env variables
  const supabaseUrl = config.public.supabaseApiUrl
  const supabaseApiKey = config.public.supabaseApiKey

  const options = {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  }

  const supabase = createClient(supabaseUrl, supabaseApiKey, options)

  return {
    provide: {
      supabase,
    },
  }
})
