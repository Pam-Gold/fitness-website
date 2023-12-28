import { Flex, Grid, Heading, Text, Img } from "@chakra-ui/react"

import Footer from "../components/Footer";

const AboutUs = () => {
  return(
    <Grid gridTemplateColumns="1fr" gridTemplateRows={{base:"200px 600px 400px ", sm:"200px 600px 400px",md:"200px 600px 400px", lg:"200px 600px 200px", xl:"200px 600px 200px"}}>

      <Flex h="100%" w="100%" justify="center" align="center" flexDirection="column" bg="red.400" textAlign="center" rowGap="20px"> 
<Heading color="#333" fontSize="2rem">
  Our Mission
</Heading>
<Text fontSize="1rem" color="black" fontWeight="bold">
  The driving force of this establishment is to empower individuals to achieve their optimal health and well-being.
</Text>
      </Flex>

      <Flex h="100%" w="100%" flexDirection="column" justify="center" p="10px" rowGap="25px">
<Heading mb="20px" lineHeight="15px">
  Who we Are?
</Heading >
<Text >
  We are a company established in 2003, Our main goal is to offer a diverse range of high-quality fitness programs and equipment, coupled with expert guidance from certified trainers. We strive to inspire and educate our members on the importance of physical activity, nutition and overall wellness.
</Text>

<Img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D" h={{base:"300px", sm:"300px", md:"300px", lg:"400px", xl:"400px"}} w={{base:"100%", sm:"100%", md:"100%", lg:"600px", xl:"600px"}}/>
      </Flex>

      <Footer/>
    </Grid>

  )
}

export default AboutUs;