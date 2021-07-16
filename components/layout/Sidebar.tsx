import { Grid, GridItem } from '@chakra-ui/react'
import { usePreloadedQuery, graphql } from 'react-relay'
import { useEffect } from 'react'
import { SidebarQuery } from './__generated__/SidebarQuery.graphql'
import SidebarUser from './SidebarUser'

const Sidebar = ({ children, queryRef }) => {
  useEffect(() => {
    console.log('queryRef', queryRef)
  }, [])
  const data = usePreloadedQuery<SidebarQuery>(
    graphql`
      query SidebarQuery {
        user {
          ...SidebarUser_user
        }
      }
    `,
    queryRef
  )

  return (
    <Grid h="100vh" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4} bg="gray.900">
      <GridItem rowSpan={2} colSpan={1} bg="gray.800">
        <SidebarUser user={data?.user} />
      </GridItem>
      <GridItem colSpan={4} rowSpan={2} bg="gray.900">
        {children}
      </GridItem>
    </Grid>
  )
}

export default Sidebar
