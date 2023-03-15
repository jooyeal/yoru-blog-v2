import { Box, useColorMode } from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout({ children }: PropsWithChildren) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box className="relative w-screen laptop:flex">
      <Header />
      <SideBar onChangeMode={toggleColorMode} />
      <Box className="min-h-screen pt-6 pb-6 mobile:min-h-[calc(100vh_-_4rem)] laptop:pl-80">
        {children}
      </Box>
    </Box>
  );
}
