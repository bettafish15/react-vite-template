import type { Preview } from '@storybook/react'
import { Provider } from 'react-redux'
import { store } from '../src/store'
import '../src/index.css'
import React, { useEffect } from 'react'
import { useActions } from '../src/hooks'

const MiddleTemplateStory = ({ Story }) => {
  const { loadCountryData, loadMetricData } = useActions()
  useEffect(() => {
    loadCountryData()
    loadMetricData()
  }, [])
  return <Story />
}

// Global Decorator to apply settings across all stories
const GlobalDecorator = (Story) => {
  return (
    <Provider store={store}>
      {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
      <MiddleTemplateStory Story={Story} />
    </Provider>
  )
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [GlobalDecorator],
}

export default preview
