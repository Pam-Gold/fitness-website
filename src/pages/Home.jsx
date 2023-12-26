import { Heading,Grid, Flex, Box, Img, Text, Button, List, ListItem } from "@chakra-ui/react"
import UserProfile from "../context/UserProfile";
import { useContext } from "react";



import background from '../assets/images/home-section/header5.webp'

import caloriesIcon from '../assets/images/home-section/calories.png'

import joinUsBackground from '../assets/images/home-section/joinUs.webp'

import whyUsBackground from '../assets/images/home-section/header2.webp'

import program from "../data/program";

import ProgramCard from "../components/ProgramCard";

import reviewDb from "../data/reviewDb";

import Review from "../components/Review";

const Home = () => {


  const user = useContext(UserProfile);

  const programElement = program.map(program=><ProgramCard {...program} />)


  const planStyle = {
    h: "400px",
    w: "250px",
    bg: "white",
    borderRadius: "15px",
    flexDirection: "column",
    alignItems: "center",
    rowGap: "15px",
    p: "10px",
    position: "relative",
  };

  const planTitleStyles = {
    fontSize: "1.3rem",
    color: "grey",
    mb: "20px",
  };

  const planPriceStyles = {
    fontSize: "1.7rem",
    display: "flex",
    alignItems: "center",
    color: "black",
  };

  const planTagStyles = {
    fontSize: "1rem",
    color: "#333",
    alignSelf: "center",
  };

  const planFeatureStyles = {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    mt: "20px",
  };

  const tierExcludedStyles = {
    color: "grey",
  };

  const planButtonStyle = {
    position: "absolute",
    bottom: "30px",
    bg: "red.400",
  };


  return(
 <Grid gridTemplateColumns="1fr" gridTemplateRows={{base:"800px 200px 800px ", sm:"900px 200px 600px",md:"900px 300px 700px", lg:"600px 150px 600px", xl:"600px 150px 500px"}}>
<Flex  h="100%" w="100%"
    justify="space-between"
    align="center"
    flexDirection={{
      base: "column",
      sm: "column",
      md: "column",
      lg: "row",
      xl: "row",
    }}
>
<Flex
          h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          p="10px"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="flex-start"
          bg="black"
          rowGap="25px"
        >

<Heading color="white" fontSize={{base:"1.8rem", sm:"2rem", md:"2.1rem", lg:"2.5rem", xl:"3.2rem"}}>Have a Fit and Healthy Body with  <span style={{ color: "lightcoral" }}>Bulck...</span></Heading>

<Text color="grey" fontSize={{base:"14px", sm:"16px", md:"16px", lg:"18px", xl:"18px"}}>
We are here to help and guide you to make the best decision for your
            Health and Mind.
</Text>

<Flex
            columnGap="10px"
            alignItems="center"
            justifyContent="space-between"
            mb="35px"
          >
            <Button  fontSize={{base:"14px", sm:"14px", md:"1.1rem", lg:"1.3rem", xl:"1.3rem"}}>
              Get Started
            </Button>

            <Button
             
              bg="transparent"
              color="lightgrey"
              fontSize={{base:"14px", sm:"14px", md:"1.1rem", lg:"1.3rem", xl:"1.3rem"}}
          
            >
              {" "}
              <i
                className="fa-solid fa-play"
                style={{
                  fontSize: "1.2rem",
                  height: "35px",
                  width: "35px",
                  backgroundColor: "lightcoral",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "8px",
                }}
              ></i>{" "}
              Watch Intro
            </Button>
          </Flex>

        </Flex>

       
     
        <Box
          h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          bg="black"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Img h="90%" w="90%" src={background} borderRadius="15px" />

          <Box
            h={{
              base: "100px",
              sm: "100px",
              md: "100px",
              lg: "120px",
              xl: "120px",
            }}
            w="200px"
            position="absolute"
            display="flex"
            alignItems="center"
            bg="white"
            borderRadius="10px"
            padding="10px"
            columnGap="8px"
            bottom="100px"
            left="80px"
            boxShadow="4px 4px 4px 4px rgba(0, 0, 0, 0.432)"
          >
            <Flex flexDirection="column">
              <Text
                as="h5"
                fontSize={{
                  base: "12px",
                  sm: "14px",
                  md: "1rem",
                  lg: "1rem",
                  xl: "1rem",
                }}
              >
                Todays Calories
              </Text>
              <Heading
                fontSize={{
                  base: "1.1rem",
                  sm: "1.2rem",
                  md: "1.2rem",
                  lg: "1.4rem",
                  xl: "1.4rem",
                }}
              >
                130 Cal
              </Heading>
            </Flex>
              <Flex justify="center" alignItems="center">
              <Img src={caloriesIcon} h="50px" w="50px" bg="white" />
            </Flex>

            
            </Box>
            </Box>
            </Flex>
            
      <Flex
        h="100%"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        padding={{
          base: "10px",
          sm: "10px",
          md: "10px",
          lg: "50px",
          xl: "50px",
        }}
        bg="#111"
        color="white"
      >
        <Box flexDirection="column">
          <Heading
            as="h3"
            fontSize={{
              base: "1.2rem",
              sm: "1.4rem",
              md: "1.4rem",
              lg: "1.6rem",
              xl: "1.8rem",
            }}
          >
            1M+ Users
          </Heading>{" "}
          <Text color="grey" fontSize="0.9rem">
            Trusted Supporters
          </Text>
        </Box>
        <Flex alignItems="center" justifyContent="center" columnGap="10px">
          <Box>Sponsor 1</Box>
          <Box>Sponsor 2</Box>
          <Box>Sponsor 3</Box>
        </Flex>
      </Flex>


      <Flex
        h="100%"
        w="100%"
        justifyContent="space-between"
        align="center"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        p="8px"
        columnGap={{base:"0px", sm:"0px", md:"0px", lg:"15px", xl:"15px"}}
      >
        <Flex
          h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          justify="center"
          align="center"
        >
          <Img
            src={joinUsBackground}
            h="100%"
            w="100%"
            bg="grey"
            borderRadius="10px"
        
          />
        </Flex>

        {/*  */}
        <Flex
          h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          flexDirection="column"
          justify="center"
          align="flex-start"
        >
          <Heading as="h2" fontSize="1.8rem" mb="35px">
            Get Ready and Fit Today
          </Heading>

          <Text fontSize="1.1rem" mb="25px">
            We are a fitness community focused at helping people reach their
            fitness goals and ambitions.
          </Text>
          <Text fontSize="1.1rem" mb="25px">
            We strongly believe that everyone can enroll to our program
            regardless of weight, build or experience.{" "}
          </Text>

          <Button bg="red.400" p="20px" fontSize="1.2rem">
            Join us Today
          </Button>
        </Flex>
        {/*  */}
      </Flex>

      <Flex
      h="fit-content"
        w="100%"
        bg="black"
        justify="space-between"
        align="center"
        flexDirection="column"
        p="10px"
        rowGap="50px"
      >
         <Flex
          h="30%"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          columnGap="20px"
          flexDirection={{base:"column", sm:"column", md:"column", lg:"row", xl:"row"}}
          gap="15px"
        >
          <Heading
            color="white"
            fontSize={{
              base: "1.2rem",
              sm: "1.2rem",
              md: "1.2rem",
              lg: "1.4rem",
              xl: "1.4rem",
            }}
          >
            The best programs we have to offer.
          </Heading>
          <Text
            color="grey"
            fontSize={{
              base: "14px",
              sm: "14px",
              md: "16px",
              lg: "16px",
              xl: "18px",
            }}
          >
            We offer a wide range of fitness programs to help achieve specific
            goals.
          </Text>
        </Flex>

        <Flex
          h="70%"
          w="100%"
          justifyContent="center"
          alignItems="center"
          gap="15px"
          flexWrap="wrap"
        >
          {programElement}
        </Flex>

      </Flex>

      <Flex
      h={{base:"700px", sm:"700px", md:"700px", lg:"400px", xl:"400px"}}
        w="100%"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex
          h={{ base: "60%", sm: "60%", md: "60%", lg: "100%", xl: "100%" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "60%", xl: "60%" }}
          bg="white"
          flexDirection="column"
          rowGap="25px"
          p="10px"
          justifyContent="center"
        >
          <Heading fontSize="1.8rem">Why People Choose Us</Heading>
          <List
            display="flex"
            flexDirection="column"
            rowGap="15px"
            textAlign="flex-start"
          >
            <ListItem>
              <i className="fa-solid fa-check-circle" style={{marginRight:"5px"}}></i>

              Our Flexible training and fitness schedule
            </ListItem>
            <ListItem>
            <i className="fa-solid fa-check-circle" style={{marginRight:"5px"}}></i>

              Our Fitness Programme offers well trained and disciplined Trainers{" "}
            </ListItem>
            <ListItem>
              {" "}
              <i className="fa-solid fa-check-circle" style={{marginRight:"5px"}}></i>

              Our Programme is accessible from ages 7 - 60, allowing more people
              to enroll and increase their fitness level{" "}
            </ListItem>
          </List>
        </Flex>
        <Flex
          h={{ base: "40%", sm: "40%", md: "40%", lg: "100%", xl: "100%" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "40%", xl: "40%" }}
          bg="black"
          justify="center"
          align="center"
        >
          <Img src={whyUsBackground} h="90%" w="90%" borderRadius="10px" />
        </Flex>
      </Flex>

      <Flex
        h="fit-content"
        w="100%"
        bg="black"
        justify="center"
        align="center"
        p="15px 5px"
        flexDirection="column"
      >
        <Flex
          flexDirection="column"
          align="center"
          textAlign="center"
          mb="35px"
        >
          <Heading fontSize="2rem" color="white">
            Choose Your Plan
          </Heading>
          <Text fontSize="1.3rem" color="grey">
            Choose the best plan for you and your team with no hidden charges.
          </Text>
        </Flex>
        {/*  */}
        <Flex
          align="center"
          justify="center"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          gap="20px"
        >
          <Flex sx={planStyle}>
            <Heading sx={planTitleStyles}>Basic</Heading>
            <Heading sx={planPriceStyles}>
              $59/<Text sx={planTagStyles}>Per Month</Text>{" "}
            </Heading>
            <List sx={planFeatureStyles}>
              <ListItem>
                <i className="fa-solid fa-check"></i> 6 Classes per month
              </ListItem>
              <ListItem>
                <i className="fa-solid fa-check"></i> 4 Group classes monthly
              </ListItem>
              <ListItem sx={tierExcludedStyles}>
                <i className="fa-solid fa-close"></i> Online class access
              </ListItem>
              <ListItem sx={tierExcludedStyles}>
                <i className="fa-solid fa-close"></i> Fitness ebook
              </ListItem>
            </List>
            <Button sx={planButtonStyle}>Choose Plan</Button>
          </Flex>
          {/*  */}
          <Flex sx={planStyle}>
            <Heading sx={planTitleStyles}>Professional</Heading>
            <Heading sx={planPriceStyles}>
              $99/<Text sx={planTagStyles}>Per Month</Text>
            </Heading>
            <List sx={planFeatureStyles}>
              <ListItem>
                <i className="fa-solid fa-check"></i> 10 Classes per month
              </ListItem>
              <ListItem>
                <i className="fa-solid fa-check"></i> 6 Group classes monthly
              </ListItem>
              <ListItem>
                <i className="fa-solid fa-check"></i> Online class access
              </ListItem>
              <ListItem sx={tierExcludedStyles}>
                <i className="fa-solid fa-close"></i> Fitness ebook
              </ListItem>
            </List>
            <Button sx={planButtonStyle}>Choose Plan</Button>
          </Flex>
          {/*  */}
          <Flex sx={planStyle}>
            <Heading sx={planTitleStyles}>Enterprise</Heading>
            <Heading sx={planPriceStyles}>
              $199/<Text sx={planTagStyles}>Per Month</Text>
            </Heading>
            <List sx={planFeatureStyles}>
              <ListItem>
                <i className="fa-solid fa-check"></i> 14 Classes per month
              </ListItem>
              <ListItem>
                <i className="fa-solid fa-check"></i> 8 Group classes monthly
              </ListItem>
              <ListItem>
                <i className="fa-solid fa-check"></i> Online class access
              </ListItem>
              <ListItem>
                <i className="fa-solid fa-check"></i> Fitness ebook
              </ListItem>
              <ListItem>
                <i className="fa-solid fa-check"></i> Extra fitness training
              </ListItem>
            </List>
            <Button sx={planButtonStyle}>Choose Plan</Button>
          </Flex>
        </Flex>
      </Flex>

      
      <Flex
        bg="#333"
        h={{
          base: "700px",
          sm: "700px",
          md: "600px",
          lg: "500px",
          xl: "500px",
        }}
        w="100%"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex
          h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          flexDirection="column"
          rowGap="20px"
          justify="center"
          p="10px"
        >
          <Heading fontSize="2rem" color="white">
            What Our Clients Say About Us{" "}
          </Heading>
          <Text fontSize="1.3rem" color="grey">
            This are some encouraging words left to us by our esteemed
            customers.
          </Text>
        </Flex>
        {/*  */}
        <Flex
          h={{ base: "50%", sm: "50%", md: "50%", lg: "100%", xl: "100%" }}
          w={{ base: "100%", sm: "100%", md: "100%", lg: "50%", xl: "50%" }}
          p="10px"
          justify="center"
          align="center"
        >
          <Review />
        </Flex>
      </Flex>

 </Grid>
  )
}

export default Home;