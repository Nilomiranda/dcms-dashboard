import { Box, Button, Flex, Heading, VStack, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Formik } from 'formik'
import Input from '../components/form/Input'

const formInitialValues = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const handleFormSubmit = (values, { setSubmitting }) => {
    console.log('values', values)
  }

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="gray.900" h="100vh" w="100%">
      <Flex flexDirection="column" backgroundColor="gray.800" px="1rem" py="2rem" borderRadius="0.5rem">
        <Heading as="h1" color="gray.200" px="1rem" textAlign="center">
          DCMS
        </Heading>
        <Heading as="h2" size="md" color="gray.500" px="1rem" textAlign="center">
          The simple headless CMS you always needed
        </Heading>

        <Formik initialValues={formInitialValues} onSubmit={handleFormSubmit}>
          {({ values, errors, handleSubmit, isSubmitting }) => (
            <Flex flexDirection="column" alignItems="stretch" as="form" mt="3rem" w="100%" maxWidth="500px" px="1rem" onSubmit={handleSubmit}>
              <Box mb={8}>
                <Input id="email" placeholder="name@example.com" label="Your email" />
              </Box>
              <Box mb={8}>
                <Input id="password" placeholder="A secure password" label="Your password" type="password" />
              </Box>

              <Box mb={8}>
                <Input id="password" placeholder="Your password confirmation" label="Password confirmation" type="password" />
              </Box>

              <Button alignSelf="flex-end" colorScheme="red" mb="0.5rem">
                Sign up
              </Button>

              <Text color="white">
                Already have an account? <ChakraLink color="red.600">Log in then</ChakraLink>
              </Text>
            </Flex>
          )}
        </Formik>
      </Flex>
    </Flex>
  )
}

export default SignUp
