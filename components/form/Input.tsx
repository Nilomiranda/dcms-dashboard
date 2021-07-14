import { FormControl, FormErrorMessage, FormHelperText, FormLabel, Input as ChakraInput } from '@chakra-ui/react'

interface InputProps {
  label?: string
  placeholder?: string
  helperText?: string
  type?: string
  errors?: string
  name?: string
  id: string
  value?: string
  onChange?: (event) => null
}

const Input = ({ label = '', placeholder = '', helperText = '', type = 'text', id, errors = '', name = '', value = '', onChange = () => null }: InputProps) => (
  <FormControl id={id} isInvalid={!!errors}>
    {label ? <FormLabel color="white">{label}</FormLabel> : null}
    <ChakraInput borderColor="gray.400" color="white" type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
    {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
    {errors ? <FormErrorMessage>{errors}</FormErrorMessage> : null}
  </FormControl>
)

export default Input
