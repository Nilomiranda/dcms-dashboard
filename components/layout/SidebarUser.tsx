import { graphql, useFragment } from 'react-relay'
import { Flex, Text } from '@chakra-ui/react'

const SidebarUser = ({ user }) => {
  const data = useFragment(
    graphql`
      fragment SidebarUser_user on User {
        name
        email
      }
    `,
    user
  )

  return (
    <Flex w="100%" flexDirection="column" padding="1rem">
      <Text fontSize="3xl" color="white">
        {data?.name}
      </Text>
      <Text fontSize="lg" color="gray.500">
        {data?.email}
      </Text>
    </Flex>
  )
}

export default SidebarUser
