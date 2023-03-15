import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box className="sticky top-0 flex h-16 w-full items-center  pl-4 pr-4 laptop:hidden">
      <Text>header</Text>
    </Box>
  );
}
