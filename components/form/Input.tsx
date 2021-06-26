import { FormControl, FormHelperText, FormLabel, Input as ChakraInput } from '@chakra-ui/react'

interface InputProps {
  label?: string
  placeholder?: string
  helperText?: string
  type?: string
  id: string
}

const Input = ({ label = '', placeholder = '', helperText = '', type = 'text', id }: InputProps) => (
  <FormControl id={id}>
    {label ? <FormLabel color="white">{label}</FormLabel> : null}
    <ChakraInput backgroundColor="gray.400" type={type} variant="filled" placeholder={placeholder} />
    {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
  </FormControl>
)

export default Input
