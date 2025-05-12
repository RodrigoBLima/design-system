import type { Preview } from '@storybook/react'
import '../src/styles/globals.css'

import { withConsole } from '@storybook/addon-console'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [],
        locales: 'pt-BR',
      },
    },
  },
  decorators: [(story, context) => withConsole()(story)(context)],
};

export default preview;