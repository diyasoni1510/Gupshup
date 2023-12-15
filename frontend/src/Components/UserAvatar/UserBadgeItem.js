import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      mt="10px"
      onClick={handleFunction}
      width="fit-content"
      bg="#e31e73"
      color="white"
      padding="4px"
      borderRadius="10px"
      mx={2}
    >
      {user.name}
      <CloseIcon fontSize="sm" mx={1} />
    </Box>
  );
};

export default UserBadgeItem;
