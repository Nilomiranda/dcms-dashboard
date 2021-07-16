import { Heading, Box } from '@chakra-ui/react'
import { useQueryLoader } from 'react-relay'
import { useEffect, Suspense } from 'react'
import Sidebar from '../../components/layout/Sidebar/Sidebar'
import SidebarQuery from '../../components/layout/Sidebar/__generated__/SidebarQuery.graphql'
import LoadingScreen from '../../components/loading/LoadingScreen'

const Home = (props) => {
  const [sidebarQueryRef, loadSidebarQuery] = useQueryLoader(
    SidebarQuery,
    // eslint-disable-next-line react/destructuring-assignment
    props.initialQueryRef
  )

  useEffect(() => {
    loadSidebarQuery({})
  }, [])

  if (!sidebarQueryRef) {
    return null
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      {sidebarQueryRef ? (
        <Sidebar queryRef={sidebarQueryRef}>
          <Box padding="1rem">
            <Heading color="white">Dashboard</Heading>
          </Box>
        </Sidebar>
      ) : null}
    </Suspense>
  )
}

export default Home
