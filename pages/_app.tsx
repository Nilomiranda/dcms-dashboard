import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RelayEnvironmentProvider } from 'react-relay'
import RelayEnvironment from '../src/RelayEnvironment'

function MyApp({ Component, pageProps }) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </RelayEnvironmentProvider>
  )
}

export default MyApp
