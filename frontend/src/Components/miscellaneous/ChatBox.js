import { Box } from "@chakra-ui/react";
import React from "react";
import { ChatState } from "../../Context/ChatProvider";
import SingleChat from "../SingleChat";

const ChatBox = ({ fetchChatAgain, setFetchChatAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <>
      <Box
        borderRadius="lg"
        borderWidth="1px"
        p={3}
        flexDir="column"
        alignItems="center"
        bg="white"
        display={{ base: selectedChat ? "flex" : "none", md: "flex" }}
        w={{ base: "100%", md: "68%" }}
      >
        <SingleChat
          fetchChatAgain={fetchChatAgain}
          setFetchChatAgain={setFetchChatAgain}
        />
      </Box>
    </>
  );
};

export default ChatBox;
