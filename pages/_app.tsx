import {perf} from 'config'
import 'features'
import {AppContainer} from 'features/app/containers/AppContainer'
import {HeadContainer} from 'features/app/containers/HeadContainer'
import {ThemeProviderContainer} from 'features/theme/container/ThemeProviderContainer'
import type {AppProps} from 'next/app'
import 'normalize.css/normalize.css'
import React from 'react'
import 'styles/index.css'

const App = ({Component, pageProps}: AppProps) => {
  React.useEffect(() => {
    perf?.()
  })

  return (
    <ThemeProviderContainer>
      <HeadContainer />
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ThemeProviderContainer>
  )
}

export default App
