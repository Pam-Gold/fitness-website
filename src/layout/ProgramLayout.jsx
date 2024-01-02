import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const ProgramLayout = () => {
return(
  <Box>
    <Outlet/>
  </Box>
)
}

export default ProgramLayout;