import { Box, Button, Flex, Heading, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import { commitMutation, useRelayEnvironment, graphql } from 'react-relay'
import Input from '../components/form/Input'

const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('This field is required'),
  name: yup.string().required('This field is required'),
  password: yup.string().required('This field is required'),
  passwordConfirmation: yup.string().test('passwords-match', 'Passwords must match', function validatePasswordConfirmation(value) {
    return this.parent.password === value
  }),
})

const formInitialValues = {
  email: '',
  name: '',
  password: '',
  passwordConfirmation: '',
}

const SignUp = () => {
  const environment = useRelayEnvironment()

  const signUpMutation = graphql`
    mutation signUpMutation($input: CreateUserInput!) {
      createUser(input: $input) {
        user {
          name
          id
          email
        }
      }
    }
  `

  const handleCreateUserMutationCompleted = (setSubmitting) => {
    setSubmitting(false)
    console.log('user created')
  }

  const handleCreateUserMutationError = (setSubmitting) => {
    setSubmitting(false)
    console.error('error creating user')
  }

  const commitSignUpMutation = (input, setSubmitting) =>
    commitMutation(environment, {
      mutation: signUpMutation,
      variables: {
        input,
      },
      onCompleted: () => handleCreateUserMutationCompleted(setSubmitting),
      onError: () => handleCreateUserMutationError(setSubmitting),
    })

  const handleFormSubmit = (values, { setSubmitting }) => {
    setSubmitting(true)
    const { name, email, password } = values

    commitSignUpMutation({ name, authProvider: { credentials: { email, password } } }, setSubmitting)
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
                <Field name="name">
                  {({ field, form }) => <Input {...field} id="name" name="name" placeholder="How should we call you?" label="Your name" errors={form.touched.name && form.errors.name} />}
                </Field>
              </Box>

              <Box mb={8}>
                <Field name="password">
                  {({ field, form }) => (
                    <Input {...field} id="password" name="password" placeholder="A secure password" label="Your password" type="password" errors={form.touched.password && form.errors.password} />
                  )}
                </Field>
              </Box>

              <Box mb={8}>
                <Field name="passwordConfirmation">
                  {({ field, form }) => (
                    <Input
                      {...field}
                      id="password-confirmation"
                      name="passwordConfirmation"
                      placeholder="Your password confirmation"
                      label="Password confirmation"
                      type="password"
                      errors={form.touched.passwordConfirmation && form.errors.passwordConfirmation}
                    />
                  )}
                </Field>
              </Box>

              <Button type="submit" alignSelf="flex-end" colorScheme="red" mb="0.5rem" isLoading={isSubmitting}>
                Sign up
              </Button>

              <Text color="white">
                Already have an account? <ChakraLink color="red.600">Log in then</ChakraLink>
              </Text>
            </Form>
          )}
        </Formik>
      </Flex>
    </Flex>
  )
}

export default SignUp
