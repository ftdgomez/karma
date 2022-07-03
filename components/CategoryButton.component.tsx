import { Box, Center, Grid, Text } from "@chakra-ui/react";
import { BiChevronRight, BiChevronRightSquare } from "react-icons/bi";

export const CategoryButton = ({ cat }: any) => {
  return (
    <Grid
      mx={4}
      p={4}
      mb={4}
      rounded="md"
      bg="blue.100"
      templateColumns="1fr 80px"
    >
      <Box>
        <Text fontSize="21px" mb={2} fontWeight="bold">{cat.name}</Text>
        <Text fontSize="sm">{cat.description}</Text>
      </Box>
      <Center fontSize="2rem">
        <BiChevronRight />
      </Center>
    </Grid>
  );
};
