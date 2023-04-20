<template>
  <nav class="bg-gray-50 shadow-sm">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              class="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              class="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-start sm:items-stretch">
          <nuxt-link to="/" class="flex flex-shrink-0 items-center">
            <img
              class="block h-8 w-auto lg:hidden"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <img
              class="hidden h-8 w-auto lg:block"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </nuxt-link>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
              <nuxt-link
                v-for="link in links"
                :key="link.name"
                :to="link.href"
                :class="route.href === link.href ? 'bg-gray-200' : ''"
                class="text-gray-900 rounded-md px-3 py-2 text-xs font-medium"
              >
                {{ link.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <nuxt-link v-if="user" to="/account">
          <ui-button color="secondary">Mon compte</ui-button>
        </nuxt-link>
        <div v-else>
          <nuxt-link to="/auth/signup">
            <ui-button>S'inscrire</ui-button>
          </nuxt-link>
          <nuxt-link to="/auth/signin" class="ml-2">
            <ui-button color="secondary">Se connecter</ui-button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <nuxt-link
          v-for="link in links"
          :key="link.name"
          :to="link.href"
          class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
        >
          {{ link.name }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
// Composable
const route = useRoute()

// Data
const user = useState('user')
const links = ref([
  {
    name: 'Carte',
    href: '/map',
  },
  {
    name: 'Balades',
    href: '/trips',
  },
])
</script>
