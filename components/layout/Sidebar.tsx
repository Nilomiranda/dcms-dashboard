import { Grid, GridItem } from '@chakra-ui/react'

const Sidebar = ({ children }) => (
  <Grid h="100vh" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4} bg="gray.900">
    <GridItem rowSpan={2} colSpan={1} bg="gray.800" />
    <GridItem colSpan={4} rowSpan={2} bg="gray.900">
      {children}
    </GridItem>
  </Grid>
)

export default Sidebar
