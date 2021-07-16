import Link from 'next/link'
import { Button, VStack, Icon } from '@chakra-ui/react'
import { IoPerson, IoList, IoDocuments } from 'react-icons/io5'

const SidebarButtons = () => (
  <VStack mt="3rem" spacing="1.5rem">
    <Link href="/app/profile">
      <Button _hover={{ background: 'gray.700' }} size="lg" height="48px" width="200px" borderBottom="2px" borderColor="red.500" bg="transparent" color="white" w="100%" borderRadius="0">
        <Icon as={IoPerson} mr="0.75rem" /> Profile
      </Button>
    </Link>

    <Link href="/app/posts">
      <Button _hover={{ background: 'gray.700' }} size="lg" height="48px" width="200px" borderBottom="2px" borderColor="red.500" bg="transparent" color="white" w="100%" borderRadius="0">
        <Icon as={IoDocuments} mr="0.75rem" /> Posts
      </Button>
    </Link>

    <Link href="/app/domains">
      <Button _hover={{ background: 'gray.700' }} size="lg" height="48px" width="200px" borderBottom="2px" borderColor="red.500" bg="transparent" color="white" w="100%" borderRadius="0" s>
        <Icon as={IoList} mr="0.75rem" /> Domains
      </Button>
    </Link>
  </VStack>
)

export default SidebarButtons
