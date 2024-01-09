import { Box, Grid, Button } from "@chakra-ui/react";

import {Link} from "react-router-dom"
import programs from "../../data/programs";

import ProgramCard from "../../components/ProgramCard";

const MorePrograms = () => {

  const moreProgramElements = programs.map(program=><ProgramCard {...program}/>)

  return(
    <Box>
      <Button m="15px 25px" fontSize="1.3rem">
        <Link to="/programs"><i className="fa-solid fa-arrow-left"></i></Link></Button>
<Grid gridTemplateColumns={{base:"1fr", sm:"1fr", md:"1fr", lg:"1fr 1fr 1fr", xl:"1fr 1fr 1fr"}} gap="15px" placeItems="center" placeContent="center"  p="15px">
 
{moreProgramElements}
</Grid>
</Box>
  )
}

export default MorePrograms;