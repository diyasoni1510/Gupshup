import { Box } from "@chakra-ui/layout";
import Chatbox from "../Components/miscellaneous/ChatBox";
import MyChats from "../Components/miscellaneous/MyChat";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { useState } from "react";

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchChatAgain, setFetchChatAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchChatAgain={fetchChatAgain} />}
        {user && (
          <Chatbox
            fetchChatAgain={fetchChatAgain}
            setFetchChatAgain={setFetchChatAgain}
          />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
