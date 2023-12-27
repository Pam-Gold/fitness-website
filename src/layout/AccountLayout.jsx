import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

let AccountLayout = () => {
  return(
<Box>
<Outlet/>
</Box>
  )
}

export default AccountLayout;