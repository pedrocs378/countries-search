import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import dark from '../styles/themes/dark'

import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
