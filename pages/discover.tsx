import { Box, Center, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import { CategoryButton } from "../components/CategoryButton.component";
import { MainLayout } from "../components/MainLayout.component";

function Discover() {
  return (
    <MainLayout
      header={
        <Flex
          justifyContent="space-between"
          alignItems="center"
          p={3}
          borderBottom="1px solid #e1e1e1"
        >
          <Text fontSize="24px" mb={2} fontWeight="bold">
            Explorar
          </Text>
          <Box height="52px" w="52px">
            <Image src="/icon2.png" height="52px" width="52px" alt="logo icon" />
          </Box>
        </Flex>
      }
    >
      <Flex
        alignItems="center"
        w="50%"
        px={8}
        mx="auto"
        border="1px solid #1994d7"
        rounded="full"
        my={4}
      >
        <BiSearch /> <Text ml={4}>Buscar tags</Text>
      </Flex>
      <Text mb={4} fontSize="24px" fontWeight="bold" mx={4}>
        Categorias
      </Text>
      <CategoryButton />
      <CategoryButton />
      <CategoryButton />
      <CategoryButton />
      <CategoryButton />
      <CategoryButton />
      <CategoryButton />
    </MainLayout>
  );
}

export default Discover;