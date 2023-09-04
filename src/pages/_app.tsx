import type { AppProps } from 'next/app'
import { theme } from '@/styles/theme'
import "../styles/fonts.css"
import "../styles/scroll.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
