import { Box, Center, Flex, Grid, HStack, Text } from "@chakra-ui/react";
import { BiCalendar, BiPin } from "react-icons/bi";

export const eventDefaultValue = {
  title: "Lorem ipsum dolor sit amet",
  date: "2020-01-01",
  duration: "1week",
  location: 'Lorem ipsum dolor sit amet',
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisl, eu consectetur nisl nisi euismod nisl.",
  requirements: [
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet",
  ],
  tags: ["Lorem", "ipsum", "dolor", "sit"],
  image: ["https://picsum.photos/id/1/400/400"],
  qrCode: "https://picsum.photos/id/1/400/400",
  limitPersons: 10,
};

function formatMothToLocalIntl(month: number) {
  return new Intl.DateTimeFormat("es-ES", {
    month: "long",
  }).format(new Date(2020, month, 1));
}

export const OEvent = ({ title, date }: any) => {
  const d = new Date(date);

  return (
    <Grid bg="white" rounded="md" mx={4} mb={4} border="1px solid #e1e1e1" templateColumns=".3fr 1fr">
      <Center flexDir="column" h="5rem" borderRight="1px solid #e1e1e1">
        <Text fontWeight="bold">{d.getDay()}</Text>
        <Text textTransform="capitalize" fontWeight="bold">
          {formatMothToLocalIntl(d.getMonth())}
        </Text>
      </Center>
      <Flex px={4} justifyContent="center" alignItems="flex-start" flexDir="column">
        <Text fontWeight="bold">{title}</Text>
        <Grid py={2} templateColumns="1fr 1fr" gap={4}>
            <HStack>
                <BiCalendar />
                <Text>{date}</Text>
            </HStack>
            <HStack>
                <BiPin />
                <Text>Lugar</Text>
            </HStack>
        </Grid>
      </Flex    >
    </Grid>
  );
};
