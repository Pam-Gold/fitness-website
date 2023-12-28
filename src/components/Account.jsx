import { Flex, Grid, List, ListItem, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";

import Footer from "./Footer";

const Account = () => {
  const buttonStyles = {
    bg: "transparent",
    p: "0px",
  };
  return (
    <Grid
      gridTemplateColumns="1fr"
      gridTemplateRows={{
        base: " 400px  400px",
        sm: "400px  400px",
        md: "400px 400px",
        lg: "400px 200px",
        xl: "400px 200px",
      }}
    >
      <Flex h="100%" w="100%" p="25px">
        <List
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap="35px"
          fontSize="1rem"
          fontWeight="bold"
        >
          <ListItem>
            <Link to="account/edit-profile">Edit Profile</Link>
          </ListItem>
       
          <ListItem>
            <Link to="notification">Notifications</Link>
          </ListItem>
          <ListItem>
            <Link to="billing">Billing</Link>
          </ListItem>
          <ListItem>
            <Button bg="red.400" color="white">
              Log Out
            </Button>
          </ListItem>
        </List>
      </Flex>

      <Footer />
    </Grid>
  );
};

export default Account;
