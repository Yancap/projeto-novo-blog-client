import "../styles/fonts.css"
import "../styles/scroll.css"
import { makeServer } from '@/services/miragejs'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'
import { theme } from '@/styles/theme'
import { ChakraProvider } from "@chakra-ui/react"

if(process.env.NODE_ENV === 'development') {
  makeServer()
}

const client = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider> 
  )
}
