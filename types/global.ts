// Toast
interface Toast {
  status: boolean
  type: 'success' | 'error' | 'information'
  message: string
  title: string
}

// Button group
interface Items {
  id: string
  title: string
}
