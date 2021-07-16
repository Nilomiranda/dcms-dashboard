import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RelayEnvironmentProvider } from 'react-relay'
import RelayEnvironment from '../src/RelayEnvironment'
import MainAppLayout from '../components/layout/MainAppLayout'

function MyApp({ Component, pageProps }) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <ChakraProvider>
        <MainAppLayout>
          <Component {...pageProps} />
        </MainAppLayout>
      </ChakraProvider>
    </RelayEnvironmentProvider>
  )
}

export default MyApp
