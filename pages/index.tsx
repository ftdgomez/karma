/* eslint-disable @next/next/no-img-element */
import { Box, Button, Center } from "@chakra-ui/react";
import Link from "next/link";

function Page() {
  return (
    <Center bg="blue.400" h="100vh" flexDir="column">
      <Box mx={4} maxW="240px">
        <img src="/logo.png" alt="xxx" />
      </Box>
      <Link href="/login" passHref>
        <Button my={4} size="lg" bgColor="blue.800" color="white">
          Iniciar Sesión
        </Button>
      </Link>
      <Link href="/register" passHref>
        <Button size="sm" bgColor="blue.700" color="white">
          Registrarse
        </Button>
      </Link>
    </Center>
  );
}

export default Page;
