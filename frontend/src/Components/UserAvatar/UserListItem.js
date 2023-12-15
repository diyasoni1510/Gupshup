import React from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";

const UserListItem = ({ user, handleFunction }) => {
  //   const { user } = ChatState();
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#e8e8e8"
      _hover={{ background: "#e31e73", color: "white" }}
      w="100%"
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      my="2"
      py="10px"
      borderRadius="lg"
    >
      <Avatar
        mr="2"
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize="xs">
          <b>Email:{user.email}</b>
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
