import React, { useEffect } from "react";
import {
  Container,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import logo from "../gupshup-logo.png";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) history.push("/chats");
  }, [history]);
  return (
    <Container maxW="xl" centerContent>
      {/* <h1>hii</h1> */}
      <Box
        d="flex"
        bg={"white"}
        w="100%"
        alignItems="center"
        borderWidth="1px"
        position="fixed"
        top={0}
      >
        <img
          src={logo}
          alt=""
          width={"200px"}
          height={"200px"}
          style={{ marginLeft: "10px" }}
        />
      </Box>
      <Box w="100%" bg={"white"} p={2} position="relative" top="15%">
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
