import { Heading, Flex } from "@chakra-ui/react"

import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

import UserProfile from "../context/UserProfile";
import { useState } from "react";


const Layout = () => {
  
const [user, setUser] = useState({
  userName:"",
  email:"",
  password:"",
  img:"",
  toggle:false,
  account:false,
  plan:"Free",
  duration:"30days"

})

  return(
    <UserProfile.Provider value={[user, setUser]}>

    <Flex h="fit-content" w="100%" flexDirection="column">
<Navbar/>
<Outlet/>
  </Flex>
  </UserProfile.Provider>
 
  )

 
}
export default Layout;