import { Box } from "@chakra-ui/react";

import programs from "../../data/programs";

import ProgramCard from "../../components/ProgramCard";

const MorePrograms = () => {

  const moreProgramElements = programs.map(program=><ProgramCard {...programs}/>)

  return(
<Box>
{moreProgramElements}
</Box>
  )
}

export default MorePrograms;