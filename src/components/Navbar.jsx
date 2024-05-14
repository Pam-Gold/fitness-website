import {
  Flex,
  Box,
  Img,
  Button,
  List,
  ListItem,
  Input,
  Heading,
  Text,
} from "@chakra-ui/react";

import { Link, NavLink } from "react-router-dom";

import "../index.css";

import "../assets/icons/fontawesome/css/fontawesome.min.css";
import "../assets/icons/fontawesome/css/all.min.css";

import logo from "../assets/logo/weights.jpg";

import useToggle from "../hooks/useToggle";

import UserProfile from "../context/UserProfile";

import { useContext } from "react";

const Navbar = () => {
  const navbarStyles = {
    pos: {
      base: "absolute",
      sm: "absolute",
      md: "absolute",
      lg: "static",
      xl: "static",
    },

    top: { base: "50px", sm: "50px", md: "50px" },
    left: { base: "0px", sm: "0px", md: "0px" },
    right: { base: "0px", sm: "0px", md: "0px" },

    h: { base: "200px", sm: "200px", md: "200px", lg: "0px", xl: "0px" },
    bg: { base: "black", sm: "black", md: "black" },
    flexDirection: {
      base: "column",
      sm: "column",
      md: "column",
      lg: "row",
      xl: "row",
    },
  };
  const navbarMenuStyles = {
    fontSize: {
      base: "1.6rem",
      sm: "1.6rem",
      md: "1.8rem",
      lg: "1.2rem",
      xl: "1.3rem",
    },
    color: "lightgrey",
    fontWeight: "bold",
  };





  // Navbar Toggle

  const [navbarToggle, renderNavbar] = useToggle();

  // User Profile

  const user = useContext(UserProfile);

  // Form Toggle

  const [formToggle, renderForm] = useToggle();

  const [switchForm, toggleFormSwitch] = useToggle();

  //  Handle Form Changes

  const handleSignInChanges = (evt) => {
    const { name, value } = evt.target;

    user[1]((prev) => ({
      ...prev,
      [name]: value,
      toggle: true,
      account: true,
    }));

    console.log(user[0]);
  };

  const handleSignUpChanges = (evt) => {
    const { name, value } = evt.target;

    user[1]((prev) => ({
      ...prev,
      [name]: value,
      toggle: true,
      account: true,
    }));

    console.log(user[0]);
  };

  //

  const handleSignUp = () => {
    if (user[0].userName === "") {
      alert("Insufficient Characters");
    } else if (user[0].email === "") {
      alert("Invalid Email");
    } else if (user[0].password.length < 8) {
      alert("Insufficient Characters");
    } else {
      alert("Account Created");

      renderForm();
    }
  };
  const handleSignIn = () => {
    if (user[0].email === "") {
      alert("Invalid Email");
    } else if (user[0].password.length < 8) {
      alert("Insufficient Characters");
    } else {
      alert("Successfully Signed In");

      renderForm();
    }
  };

  const hamburgerStyles1 = {
    h: "5px",
    w: "100%",
    bg: "black",
    borderRadius: "10px",
    transform:!navbarToggle? "rotate(0deg) translate(0, 0)" :"rotate(-45deg) translate(-4px, 7px)" ,
    transition:"0.4s ease"
  
  };

  const hamburgerStyles2 = {
    h: "5px",
    w: "100%",
    bg: "black",
    borderRadius: "10px",
    opacity: !navbarToggle? 1 : 0,
    transition:"0.4s ease"
  
  };

  const hamburgerStyles3 = {
    h: "5px",
    w: "100%",
    bg: "black",
    borderRadius: "10px",
    transform:!navbarToggle? "rotate(0deg) translate(0, 0)" :"rotate(45deg) translate(-7px, -10.5px)" ,
    transition:"0.4s ease"
  
  
  };

  return (
    <Flex
      h="50px"
      w="100%"
      bg="#111"
      align="center"
      justify="space-between"
      p="0px 10px"
      pos="relative"
    >
      <Box>
        <Link to="/">
          <Img
            src={logo}
            alt=""
            h="40px"
            w="40px"
            borderRadius="5px"
            bg="white"
            p="3px"
          />
        </Link>
      </Box>

      <Flex align="center" columnGap="15px">
        <List
          display={{
            base: navbarToggle ? "flex" : "none",
            sm: navbarToggle ? "flex" : "none",
            md: navbarToggle ? "flex" : "none",
            lg: "flex",
            xl: "flex",
          }}
          alignItems="center"
          justifyContent={{ base: "center", sm: "center", md: "center" }}
          columnGap="15px"
          className="navbarMenu"
          sx={navbarStyles}
          zIndex="99"

        >
          <ListItem sx={navbarMenuStyles}>
            <NavLink to="aboutus" onClick={renderNavbar}>
              About Us
            </NavLink>
          </ListItem>
          <ListItem sx={navbarMenuStyles}>
            <NavLink to="programs" onClick={renderNavbar}>
              Programs
            </NavLink>
          </ListItem>
          <ListItem sx={navbarMenuStyles}>
            <NavLink to="membership" onClick={renderNavbar}>
              Membership
            </NavLink>
          </ListItem>
     
          <ListItem sx={navbarMenuStyles}>
            <NavLink to="contact" onClick={renderNavbar}>
              Contact
            </NavLink>
          </ListItem>
        </List>

        <Flex
            h="25px"
            w="30px"
            flexDirection="column"
            align="center"
            justify="space-between"
            display={{
              base: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "none",
            }}
            className="hamburgerMenu"
            onClick={renderNavbar}
          >
            <Box sx={hamburgerStyles1}></Box>
            <Box sx={hamburgerStyles2}></Box>
            <Box sx={hamburgerStyles3}></Box>
          </Flex>

      
        </Flex>
      
    </Flex>
  );
};

export default Navbar;
