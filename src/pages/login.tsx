import { Center, Heading } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import Button from "~/components/molecules/Button";

const Login: NextPage = () => {
  const { data: session } = useSession();
  return (
    <Center className="h-screen flex-col gap-12">
      <Heading>Login page for admin</Heading>
      {session ? (
        <Button onClick={() => signOut()}>SIGNOUT</Button>
      ) : (
        <Button onClick={() => signIn()}>SIGNIN</Button>
      )}
    </Center>
  );
};

export default Login;
