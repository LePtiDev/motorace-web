// Set the auth user un the store
export const setAuth = async () => {
  const { $supabase } = useNuxtApp()

  const user: any = useState<User>('user')
  const router = useRouter()
  const { data: authUser }: any = await $supabase.auth.getUser()

  const userDataFromDB = await $supabase
    .from('users')
    .select()
    .eq('user_id', authUser.user.id)
    .limit(1)
    .single()
  if (userDataFromDB.data) {
    user.value = userDataFromDB.data
  }
}

// Check if the user exist in the table users
export const checkIfUserExist = async () => {
  const { $supabase } = useNuxtApp()
  const { data: authUser }: any = await $supabase.auth.getUser()
  const { data, error } = await $supabase
    .from('users')
    .select('*', { count: 'exact' })
    .eq('user_id', authUser.user.id)
    .limit(1)
    .single()
  if (error) {
    return false
  } else {
    return true
  }
}

// Create user on the table users
export const createUser = async (form: {
  firstname: string
  lastname: string
}) => {
  const { $supabase } = useNuxtApp()
  const { data: authUser }: any = await $supabase.auth.getUser()

  const user: User = {
    user_id: authUser.user.id,
    firstname: form.firstname,
    lastname: form.lastname,
    email: authUser.user.email,
    provider: authUser.user.app_metadata.provider,
  }

  const savedUser = await $supabase.from('users').insert(user)
  setAuth()
}
