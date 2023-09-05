import type { AppProps } from 'next/app'
import { ChakraProvider } from '../../node_modules/@chakra-ui/react/dist/chakra-provider'
import { theme } from '@/styles/theme'
import "../styles/fonts.css"
import "../styles/scroll.css"

export default function App({ Component, pageProps }: AppProps) {
  return ( 
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
)
  
}
