import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import { AppThemeProvider } from '../contexts/AppThemeContext'

import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsmounted] = useState(false)

  useEffect(() => {
    setIsmounted(true)
  }, [])

  return (
    <AppThemeProvider>
      <GlobalStyles />

      {isMounted && <Component {...pageProps} />}
    </AppThemeProvider>
  )
}

export default MyApp