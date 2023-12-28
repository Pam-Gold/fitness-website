import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const NoPage = () => {
  return(
<Flex h="100vh" w="100%" flexDirection="column" justify="center" align="center" textAlign="center" rowGap="30px">
<Heading fontSize="2.1rem">404 Page Not Found</Heading>
<Text color="grey" fontSize='1rem' fontWeight="bold">The page or link that your looking for cannot be found</Text>
<Link to="/"><Button>Go to Home <i className="fa-solid fa-arrow-right" style={{marginLeft:"8px"}}></i></Button></Link>
</Flex>
  )
}

export default NoPage