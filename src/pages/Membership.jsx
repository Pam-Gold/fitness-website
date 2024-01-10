import { Button, Flex, Heading, List, ListItem } from "@chakra-ui/react";

import { useContext, useEffect } from "react";

import UserProfile from "../context/UserProfile";

import useToggle from "../hooks/useToggle";

const Membership = () => {

  const user = useContext(UserProfile);


  const tierExcludedStyles = {
    color: "grey",
   
  };

  const tierStyles = {
    display:"flex",
    flexDirection:"row-reverse"
  }

  const upgradeMenuStyles = {
mb:"8px",
p:"5px",
fontSize:"16px"    
  }

  const [upgradeMenu, upgradeMenuToggle] = useToggle()

  const getDate = new Date();

  const getPurchaseDay = getDate.getDay();

  const getPurchaseMonth = getDate.getMonth();

  const getPurchaseYear = getDate.getFullYear();

  const getPurchaseDate = `${getPurchaseDay}/${getPurchaseMonth + 1}/${getPurchaseYear}`
  console.log(getPurchaseDay)

  localStorage.setItem('date',getPurchaseDate )
  return (
    <Flex h="100vh" w="100%">
      <Flex
        h="fit-content"
        width="100%"
        flexDirection="column"
        m="10px"
        bg="lightgray"
        borderRadius="8px"
        pos="relative"
      >
        <Flex h="150px" justifyContent="center" align="center" >
          <Flex
            h="65px"
            w="fit-content"
            p="10px"
            bg="transparent"
            border="3px solid"
            justifyContent="center"
            align="center"
            fontSize="1rem"
            fontWeight="bold"
            borderRadius="8px"
          >
            You're Currently on the {user[0].plan} Tier
          </Flex>
        </Flex>
        <Flex
          h="350px"
          justify="space-between"
          align="center"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          p="5px"
        >
          <List
            h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
            w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="center"
          >
            <ListItem>Plan: {user[0].plan}✨</ListItem>
            <ListItem>Started:{localStorage.getItem('date')}</ListItem>
            <ListItem>Duration:</ListItem>
          </List>
          {/*  */}
          { user[0].plan === "Free" &&
            <List
              h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
              w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
              display="flex"
              flexDirection="column"
              alignItems={{
                base: "flex-start",
                sm: "flex-start",
                md: "flex-start",
                lg: "flex-end",
                xl: "flex-end",
              }}
              justifyContent="center"
             
            >
              <ListItem >
               2 Classes per month   <i className="fa-solid fa-check"></i>
              </ListItem>
              <ListItem >
                 2 Group classes monthly <i className="fa-solid fa-check"></i>
              </ListItem>
              <ListItem  sx={tierExcludedStyles}>
               Online class access   <i className="fa-solid fa-close"></i>
              </ListItem>
              <ListItem sx={tierExcludedStyles}>
    Fitness ebook <i className="fa-solid fa-close"></i>
              </ListItem>
            </List>
          }
          {/*  */}
          { user[0].plan === "Basic" &&
            <List
              h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
              w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
              display="flex"
              flexDirection="column"
              alignItems={{
                base: "flex-start",
                sm: "flex-start",
                md: "flex-start",
                lg: "flex-end",
                xl: "flex-end",
              }}
              justifyContent="center"
            >
              <ListItem>
                6 Classes per month  <i className="fa-solid fa-check"></i>
              </ListItem>
              <ListItem>
               4 Group classes monthly   <i className="fa-solid fa-check"></i>
              </ListItem>
              <ListItem sx={tierExcludedStyles}>
          Online class access        <i className="fa-solid fa-close"></i>
              </ListItem>
              <ListItem sx={tierExcludedStyles}>
               Fitness ebook   <i className="fa-solid fa-close"></i>
              </ListItem>
            </List>
          }
          {/*  */}
               { user[0].plan === "Professional" &&
            <List
              h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
              w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
              display="flex"
              flexDirection="column"
              alignItems={{
                base: "flex-start",
                sm: "flex-start",
                md: "flex-start",
                lg: "flex-end",
                xl: "flex-end",
              }}
              justifyContent="center"
            >
           <ListItem>
             10 Classes per month     <i className="fa-solid fa-check"></i>
              </ListItem>
              <ListItem>
            6 Group classes monthly      <i className="fa-solid fa-check"></i>
              </ListItem>
              <ListItem>
            Online class access      <i className="fa-solid fa-check"></i>
              </ListItem>
              <ListItem sx={tierExcludedStyles}>
              Fitness ebook    <i className="fa-solid fa-close"></i>
              </ListItem>
            </List>
          }
          {/*  */}
               { user[0].plan === "Enterprise" &&
            <List
              h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
              w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
              display="flex"
              flexDirection="column"
              alignItems={{
                base: "flex-start",
                sm: "flex-start",
                md: "flex-start",
                lg: "flex-end",
                xl: "flex-end",
              }}
              justifyContent="center"
            >
              <ListItem>
                14 Classes per month <i className="fa-solid fa-check"></i> 
              </ListItem>
              <ListItem>
          8 Group classes monthly <i className="fa-solid fa-check"></i>
              </ListItem>
              <ListItem>
                 Online class access <i className="fa-solid fa-check"></i>
              </ListItem>
              <ListItem>
              Fitness ebook <i className="fa-solid fa-check"></i>
              </ListItem>
              <ListItem>
                Extra fitness training  <i className="fa-solid fa-check"></i>
              </ListItem>
            </List>
          }
        </Flex>
        <Button onClick={upgradeMenuToggle} alignSelf="flex-start" m="10px">
          Upgrade Plan
        </Button>
        { upgradeMenu &&
          <Flex h="230px" w="200px" pos="absolute" left="0px" bottom="-240px"   bg="lightgray" justify="center" align="center"  borderRadius="8px" p="8px">
        <Flex flexDirection="column" >
          <Button onClick={()=>user[1](prev=>({...prev, plan:"Basic"}))} sx={upgradeMenuStyles}>Basic Plan</Button>
          <Button onClick={()=>user[1](prev=>({...prev, plan:"Professional"}))} sx={upgradeMenuStyles}>Professional Plan</Button>
          <Button onClick={()=>user[1](prev=>({...prev, plan:"Enterprise"}))} sx={upgradeMenuStyles}>Enterprise Plan</Button>
          <Button onClick={()=>user[1](prev=>({...prev, plan:"Free"}))} sx={upgradeMenuStyles}>Remove Plan</Button>
        </Flex>
          </Flex>
        }
      </Flex>
      
    </Flex>
  );
};

export default Membership;
