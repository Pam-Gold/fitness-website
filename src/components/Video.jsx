import { Flex } from "@chakra-ui/react"

const Video = (props) => {
  return(

    <Flex h="100%" w="100%" pos="fixed" top="0px"left="0px" right="0px" bottom="0px" p="10px" bg="white" zIndex="199">
   <video src="https://youtu.be/Osd4DLpMNp4?si=Gbb2lrWXFPyMzeKE"  style={{height:"100%", width:"100%", outline:"none"}} controls>

    </video>
    </Flex>
 
  )
} 

export default Video;