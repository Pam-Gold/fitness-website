import { Button, Flex, Heading, Img, Input, Text } from "@chakra-ui/react"

import UserProfile from "../../context/UserProfile"

import { useContext } from "react"

import { Link } from "react-router-dom"

const Personalization = () => {

  const user = useContext(UserProfile);

  const saveChanges = () =>{

  }

  const handleProfileUpdate = (evt) => {
const {name, value} = evt.target;

user[1](prevData=>({...prevData, img:URL.createObjectURL(evt.target.files[0]), [name]:value}))


  }

  console.log(user[0])

  return(
  <Flex flexDirection="column" p="15px" rowGap="35px">
    <Heading><Link to="/account" fontSize="1.2rem"><i className="fa-solid fa-arrow-left"></i></Link>  Edit Profile</Heading>

    <Flex alignItems="center" columnGap="20px">

    <Img src={user[0].img} h="120px" w="120px" borderRadius="50% " bg="black" />

    <Flex flexDirection="column">
      <Heading>
{user[0].userName}
      </Heading>
      <Text>{user[0].email}</Text>
    </Flex>
    </Flex>

    <Flex mt="50px">
      <form className="edit-form">
      
        <Input type="file" border="none" p="0px" className="input-file" onChange={handleProfileUpdate}/>
    
      
      </form>
    </Flex>
  </Flex>
  )
}

export default Personalization;