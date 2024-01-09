import { Flex, Grid, GridItem, Heading, SimpleGrid, Text,  } from "@chakra-ui/react";


import program from '../data/featuredPrograms';

import ProgramCard from "../components/ProgramCard";
import { Link } from "react-router-dom";

import Footer from '../components/Footer';


const Programs = () => {
  
  const gridItemStyles = {
    h:"100%",
    w:"100%",
    bg:"#111",
    borderRadius:"15px"
  }
  const programElement = program.map(program=><ProgramCard sx={ gridItemStyles} {...program} />)

  return (
    <Flex h="fit-content" w="100%" flexDirection="column" rowGap="35px">

      <Flex flexDirection="column" rowGap="35px" p="8px">
      <Heading>Explore Life Changing Programs</Heading>
      <Text>
        Embark on a transformative fitness journey with our comprehensive
        programs designed to elevate your health and well-being
      </Text>
      </Flex>
      
      <Flex flexDirection="column" rowGap="25px" p="5px">
        <Heading>Our Featured Programs</Heading>
        <Grid  gap="20px" gridTemplateColumns={{base:"1fr", sm:"1fr", md:"2fr", lg:"1fr 1fr 1fr", xl:"1fr 1fr 1fr 1fr"}} gridTemplateRows={{base:"300px 300px 300px 300px ", sm:"300px 300px 300px 300px", md:"300px 300px 300px 300px", lg:"300px 300px", xl:"300px "}}>

          {programElement}
          
        </Grid>
   <Heading as="h3" display="flex" alignItems="center" fontSize="1.5rem" alignSelf="center"> <Link to="/more-programs" >More Programs <i className="fa-solid fa-arrow-right"></i></Link></Heading>
      </Flex>

<Flex>
  <Heading>Something Goes Here...</Heading>
</Flex>

<Footer/>
    </Flex>
  );
};

export default Programs;
