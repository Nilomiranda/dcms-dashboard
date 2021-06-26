import { Flex, Heading } from '@chakra-ui/react'
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
      <Heading as="h1" color="gray.200">
        DCMS
      </Heading>
      <Heading as="h2" size="md" color="gray.500">
        The simple headless CMS you always needed
      </Heading>

      <Formik initialValues={formInitialValues} onSubmit={handleFormSubmit}>
        {({ values, errors, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Input id="email" placeholder="name@example.com" label="Your email" />
          </form>
        )}
      </Formik>
    </Flex>
  )
}

export default SignUp
