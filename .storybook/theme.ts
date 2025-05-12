import { create } from '@storybook/theming/create'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'

const { theme } = resolveConfig(tailwindConfig)

export default create({
  base: 'light',
  brandTitle: 'Rodrigo Barbosa',
  brandUrl: '', // YOUR SITE URL HERE
  brandTarget: '_target',
  brandImage: './vite.svg', // YOUR BRAND LOGO HERE
  colorSecondary: theme.colors.primary.DEFAULT,
  textColor: theme.colors.neutral.DEFAULT,
})
