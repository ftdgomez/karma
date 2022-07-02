import { Box, Grid, Text } from "@chakra-ui/react";

export const CategoryButton = () => {
    return (
        <Grid mb={4} alignItems="center" mx={4} templateColumns="64px 1fr" gap={4}>
            <Box w="64px" h="64px" bg="blue" />
            <Box>
                <Text fontWeight="bold">Nombre de categoria</Text>
                <Text>9.8 mil han participado en esta categoria</Text>
            </Box>kj
        </Grid>
    );
};
