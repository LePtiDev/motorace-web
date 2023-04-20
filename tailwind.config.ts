import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    fontFamily: {
      sans: ['"Inter"'], // TO_CONFIG
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
