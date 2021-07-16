import { Box } from '@chakra-ui/react'
import { useQueryLoader } from 'react-relay'
import { useEffect, Suspense } from 'react'
import Sidebar from './Sidebar/Sidebar'
import SidebarQuery from './Sidebar/__generated__/SidebarQuery.graphql'
import LoadingScreen from '../loading/LoadingScreen'

const MainAppLayout = ({ children, ...props }) => {
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
          <Box padding="1rem">{children}</Box>
        </Sidebar>
      ) : null}
    </Suspense>
  )
}

export default MainAppLayout
