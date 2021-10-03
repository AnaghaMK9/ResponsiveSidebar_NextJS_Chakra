import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import customTheme from '../styles/customTheme'
import Layout from '../src/components/layout'
function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider theme={customTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp