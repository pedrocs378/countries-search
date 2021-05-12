import { AppProps } from 'next/app'

import { AppThemeProvider } from '../contexts/AppThemeContext'

import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AppThemeProvider>
      <Component {...pageProps} />

      <GlobalStyles />
    </AppThemeProvider>
  )
}

export default MyApp