import "../styles/fonts.css"
import "../styles/scroll.css"
import { makeServer } from '@/services/miragejs'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'
import { theme } from '@/styles/theme'
import { ChakraProvider } from "@chakra-ui/react"
import { NavbarDrawerProvider } from "@/context/NavbarDrawerContext"
import { RequestProvider } from "@/context/RequestContext"
import { SessionProvider } from 'next-auth/react'

if(process.env.NODE_ENV === 'development') {
  //makeServer()
}

const client = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <QueryClientProvider client={client}>
        <ChakraProvider theme={theme}>
          <RequestProvider>
            <NavbarDrawerProvider>
              <Component {...pageProps} />
            </NavbarDrawerProvider>
          </RequestProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </SessionProvider> 
  )
}
