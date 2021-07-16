import { Center, Spinner } from '@chakra-ui/react'

const LoadingScreen = () => (
  <Center h="100vh" w="100%" bg="gray.900">
    <Spinner size="xl" color="white" />
  </Center>
)

export default LoadingScreen
