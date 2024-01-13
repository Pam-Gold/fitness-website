import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const NotAMember =  () => {
  return(
    <Flex h="90vh" w="100%" justify="center" align="center" p="10px">
<Flex flexDir="column" rowGap="35px" align="center">

  <Heading textAlign="center" fontSize={{base:"2rem", sm:"2.1rem", md:"2.4rem", lg:"2.8rem", xl:"3.2rem"}}>You haven't subscribed to any of our fitness plans 😞</Heading>
  <Text textAlign="center" color="grey" fontSize={{base:"1rem", sm:"1rem", md:"1rem", lg:"1.3rem", xl:"1.3rem"}} w={{base:"100%", sm:"100%", md:"100%", lg:"700px", xl:"700px"}} >Only Basic, Professional  & Enterprise plan subscribers have access to this page, you have to subscribe to gain access or enjoy our free beginner programs.👍🏿</Text>

  <Button  fontSize="1rem"><Link to="/programs">Back to Programs Section <i className="fa-solid fa-arrow-right" style={{marginLeft:"5px"}}></i></Link></Button>
</Flex>
    </Flex>
  )
}

export default NotAMember;