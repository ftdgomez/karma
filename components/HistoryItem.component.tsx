import { Box, Center, Grid, Text } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { TbCertificate } from "react-icons/tb";

export const HistoryItem = ({}:any) => {
  return (
    <Box px={4} py={2} bg="blue.100" mx={4} mb={4} rounded="md">
      <Grid alignItems="center" mb={4} templateColumns="60px 1fr 60px">
        <Center fontSize="32px" pt={3}>
          <TbCertificate />
        </Center>
        <Box pt={2}>
          <Text fontSize="18px" fontWeight="bold">
            Titulo evento
          </Text>

          <Text fontSize="xs" fontWeight="bold">
            Adquirido el 01/01/2020
          </Text>
        </Box>
        <Center fontSize="28px" h="100%" pt={3}>
            <BiChevronRight />
        </Center>
      </Grid>
    </Box>
  );
};
