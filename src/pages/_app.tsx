import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
import { theme } from '../styles/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  )
}
