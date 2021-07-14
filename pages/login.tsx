import { Box, Button, Flex, Heading, Text, Link as ChakraLink, useToast } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import Link from 'next/link'
import * as yup from 'yup'
import { commitMutation, useRelayEnvironment, graphql } from 'react-relay'

import { useRouter } from 'next/router'
import Input from '../components/form/Input'

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('This field is required'),
  password: yup.string().required('This field is required'),
})

const formInitialValues = {
  email: '',
  password: '',
}

const Login = () => {
  const toast = useToast()
  const environment = useRelayEnvironment()
  const router = useRouter()

  const loginMutation = graphql`
    mutation loginMutation($input: SignInInput!) {
      signIn(input: $input) {
        token
        user {
          name
          id
          email
        }
      }
    }
  `

  const handleSignInMutationCompleted = (setSubmitting) => {
    setSubmitting(false)

    toast({
      description: 'Logged in!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })

    router.push('/app/home')
  }

  const handleSignInMutationFailed = (setSubmitting, error: Error) => {
    setSubmitting(false)

    toast({
      title: "Couldn't sign you in",
      description: error?.message || 'Unknown error occurred. Please try again later',
      status: 'error',
      duration: 5000,
      isClosable: true,
    })
  }

  const commitSignUpMutation = (input, setSubmitting) =>
    commitMutation(environment, {
      mutation: loginMutation,
      variables: {
        input,
      },
      onCompleted: () => handleSignInMutationCompleted(setSubmitting),
      onError: (error) => handleSignInMutationFailed(setSubmitting, error),
    })

  const handleFormSubmit = (values, { setSubmitting }) => {
    setSubmitting(true)
    const { email, password } = values

    commitSignUpMutation({ credentials: { email, password } }, setSubmitting)
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

        <Formik initialValues={formInitialValues} validationSchema={validationSchema} onSubmit={handleFormSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <Box mb={8}>
                <Field name="email">
                  {({ field, form }) => <Input {...field} id="email" name="email" placeholder="name@example.com" label="Your email" errors={form.touched.email && form.errors.email} />}
                </Field>
              </Box>

              <Box mb={8}>
                <Field name="password">
                  {({ field, form }) => (
                    <Input {...field} id="password" name="password" placeholder="A secure password" label="Your password" type="password" errors={form.touched.password && form.errors.password} />
                  )}
                </Field>
              </Box>

              <Button type="submit" alignSelf="flex-end" colorScheme="red" mb="0.5rem" isLoading={isSubmitting}>
                Login
              </Button>

              <Text color="white">
                Don't have an account?{' '}
                <Link href="/sign-up">
                  <ChakraLink color="red.600">Let's create one</ChakraLink>
                </Link>
              </Text>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  )
}

export default Login
