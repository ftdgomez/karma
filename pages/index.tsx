/* eslint-disable @next/next/no-img-element */
import { Box, Button, Center, Divider } from "@chakra-ui/react";
import Link from "next/link";

function Page() {
  return (
    <Center bg="blue.400" h="100vh" flexDir="column">
      <Box mx={4}>
        <img src="/logo.png" alt="xxx" />
      </Box>
      <Divider h="3px" my={2} />
      <Link href="/user" passHref>
        <Button bgColor="blue.800" color="white">
          Vista usuario
        </Button>
      </Link>
      <Divider h="3px" my={2} />
      <Link href="/organizer" passHref>
        <Button bgColor="blue.800" color="white">
          Vista organizador
        </Button>
      </Link>
    </Center>
  );
}

export default Page;
