import { Box, Flex } from "@chakra-ui/react"

const Video = (props) => {
  return(

    <Flex h="100%" w="100%" pos="fixed" top="0px"left="0px" right="0px" bottom="0px" p="10px" bg="white" zIndex="199" flexDir="column">
      <Box onClick={props.closeVideo} fontSize="2rem" pos="absolute" color="white" right="20px"  ><i className="fa-solid fa-close"></i></Box>
<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Osd4DLpMNp4?si=Gbb2lrWXFPyMzeKE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Flex>
 
  )
} 

export default Video;