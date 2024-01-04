import { Flex, List, ListItem, Heading, Text, Box } from "@chakra-ui/react";

import { Link } from "react-router-dom";
const Footer = () => {
  const footerTitleStyles = {
    fontSize: "1.45rem",
    mb: "10px",
  };

  const footerLinkStyles = {
    color:"grey",
    fontSize:"16px",
    mb:"5px"
  }

  const getDate = new Date();

  const currentYear = getDate.getFullYear();

  return (
    <Flex
      as="footer"
      justify="space-between"
      align="center"
      h="fit-content"
      w="100%"
      p=" 25px 10px"
      flexDirection="column"
      bg="black"
    >
      <Flex
        h="75%"
        w="100%"
        justify="space-between"
        // align="center"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        borderBottom="2px solid #222"
        pb="10px"
      >
        <List>
          <Heading color="white" sx={footerTitleStyles}>
            Links
          </Heading>
          <ListItem sx={footerLinkStyles}>
            <Link to="aboutus">About Us</Link>
          </ListItem>
          <ListItem sx={footerLinkStyles}>
            <Link to="programs">Programs</Link>
          </ListItem>
          <ListItem sx={footerLinkStyles}>
            <Link to="membership">Membership</Link>
          </ListItem>
          <ListItem sx={footerLinkStyles}>
            <Link to="testimonials">Testimonials</Link>
          </ListItem>
        </List>

        <List>
          <Heading color="white" sx={footerTitleStyles}>
            Programmes
          </Heading>
          <ListItem sx={footerLinkStyles}>
            {" "}
            <Link to="/basic-yoga">Basic Yoga</Link>
          </ListItem>
          <ListItem sx={footerLinkStyles}>
            <Link to="/strength-training">Strength Training</Link>
          </ListItem>
          <ListItem sx={footerLinkStyles}>
            <Link to="/body-building">Body Building</Link>
          </ListItem>
          <ListItem sx={footerLinkStyles}>
            <Link to="/weight-loss">Weight Loss</Link>
          </ListItem>
        </List>

        {/*  */}

        <List>
          <Heading color="white" sx={footerTitleStyles}>
            Help
          </Heading>
       
          <ListItem sx={footerLinkStyles}>
            <Link to="/">Support Center</Link>
          </ListItem>
          <ListItem sx={footerLinkStyles}>
            <Link to="/">Privacy Policy</Link>
          </ListItem>
          <ListItem sx={footerLinkStyles}>
            <Link to="/">Terms & Conditions</Link>
          </ListItem>
        </List>

        {/*  */}

        <List>
          <Heading color="white" sx={footerTitleStyles}>
            Contact Us
          </Heading>
          <ListItem sx={footerLinkStyles} color="#222">
            {" "}
            <i className="fa-solid fa-phone"></i> +234-903-188-9024
          </ListItem>
          <ListItem sx={footerLinkStyles} color="#222">
            {" "}
            <i className="fa-solid fa-envelope"></i> badtrailz@gmail.com
          </ListItem>
        </List>
      </Flex>

      <Flex h="25%" w="100%" justify="center" align="center" mt="15px" textAlign="center">
        <Text color="dimgrey" fontSize="16px">
          &copy; 2022 - {currentYear} PamGold.dev All Rights Reserved.
        </Text>
      </Flex>
    </Flex>
  );
};
export default Footer;
