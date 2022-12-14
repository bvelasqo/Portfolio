import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from '../components/layouts/main'
import { baseTheme } from '@chakra-ui/react'

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <MainLayout router={router}>
        <Component {...pageProps} key={router.route} />
      </MainLayout>
    </ChakraProvider>
  )
}
