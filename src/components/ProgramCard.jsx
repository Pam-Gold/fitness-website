import { Flex, Heading, Text, Img } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const ProgramCard = (props) => {

  const programStyles = {
    h: "300px",
    w: { base: "100%", sm: "100%", md: "100%", lg: "400px", xl: "400px" },
    bg: "grey",
    borderRadius: "15px",
  };
  return(
<Flex      h= "300px"
    w={ { base: "100%", sm: "100%", md: "100%", lg: "400px", xl: "400px" }}
    bg="#111"
    flexDirection="column"
    borderRadius= "15px"
    justify="space-between"
    p="10px"
    >


<Img src={props.img} h="80px" w="80px" borderRadius="15px" />

<Flex flexDirection="column">
<Heading color="white">
{props.title}
</Heading>

<Text color="grey">
{props.description}
</Text>

</Flex>

<Link to={props.url} style={{color:"lightgray"}}>Learn More <i className="fa-solid fa-arrow-right"></i></Link>
</Flex>
  )
}

export default ProgramCard;