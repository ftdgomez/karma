import { Avatar, Grid, Text } from "@chakra-ui/react"

function generateRandomHash() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export const ContributorItem = () => {
    
    return (
        <Grid rounded="md" bg="blue.400" py={2} mb={4} px={4} alignItems="center" templateColumns="42px 1fr">
            <Avatar size="md" bgImage={`https://avatars.dicebear.com/api/jdenticon/${generateRandomHash()}.svg`} />
            <Text color="white" fontWeight="bold" fontSize="18px" ml={4}>
                {generateRandomHash().slice(0, 8)}
            </Text>
        </Grid>
    )
}