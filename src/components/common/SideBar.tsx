import {
  Avatar,
  Box,
  Divider,
  Heading,
  Highlight,
  HStack,
  IconButton,
  List,
  ListIcon,
  ListItem,
  Stack,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { IoIosToday } from "react-icons/io";
import { BsLaptopFill } from "react-icons/bs";

type Props = {
  onChangeMode: () => void;
};

export default function SideBar({ onChangeMode }: Props) {
  const { colorMode } = useColorMode();
  return (
    <Box className="fixed top-0 left-0 mobile:hidden">
      <Stack className="h-screen w-80 items-center border-r p-4">
        <Heading>YORULOG</Heading>
        <Avatar src="/avatar.jpeg" size="2xl" />
        <Text className="p-4">
          <Highlight
            query="YORU"
            styles={{
              px: "2",
              py: "1",
              rounded: "full",
              bg: "teal.100",
              fontWeight: "bold",
            }}
          >
            Hello, my name is YORU and i am a software engineer welcome to my
            personal blog
          </Highlight>
        </Text>
        <HStack>
          <Link href="#">
            <IconButton
              aria-label="instagram"
              icon={<AiFillInstagram size={20} />}
              colorScheme="teal"
              size="sm"
            />
          </Link>
          <Link href="#">
            <IconButton
              aria-label="github"
              icon={<AiFillGithub size={20} />}
              colorScheme="teal"
              size="sm"
            />
          </Link>
        </HStack>
        <Divider />
        <Stack>
          <List spacing={3}>
            <ListItem
              className={`${
                colorMode === "dark"
                  ? "text-slate-300 hover:text-slate-50"
                  : "text-slate-500 hover:text-slate-900"
              } `}
            >
              <Link href="#">
                <ListIcon as={FaUser} />
                <Text as="b">About me</Text>
              </Link>
            </ListItem>
            <ListItem
              className={`${
                colorMode === "dark"
                  ? "text-slate-300 hover:text-slate-50"
                  : "text-slate-500 hover:text-slate-900"
              } `}
            >
              <Link href="#">
                <ListIcon as={IoIosToday} />
                <Text as="b">Daily life</Text>
              </Link>
            </ListItem>
            <ListItem
              className={`${
                colorMode === "dark"
                  ? "text-slate-300 hover:text-slate-50"
                  : "text-slate-500 hover:text-slate-900"
              } `}
            >
              <Link href="#">
                <ListIcon as={BsLaptopFill} />
                <Text as="b">Development</Text>
              </Link>
            </ListItem>
          </List>
        </Stack>
        <Divider />
        <Stack>
          <Text className="font-bold">Color Mode</Text>
          <Box className="flex justify-center">
            <Switch colorScheme="teal" onChange={onChangeMode} />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
