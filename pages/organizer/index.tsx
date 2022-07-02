import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { eventDefaultValue, OEvent } from "../../components/OEvent.component";
import { OLayout } from "../../components/OrganizerLayout.component";

function Page() {
  return (
    <OLayout
      header={
        <Flex
          justifyContent="space-between"
          alignItems="center"
          p={4}
          borderBottom="1px solid #e1e1e1"
        >
          <Text fontSize="24px" mb={2} fontWeight="bold">
            Explorar
          </Text>
          <Box height="52px" w="52px">
            <Image
              src="/icon2.png"
              height="52px"
              width="52px"
              alt="logo icon"
            />
          </Box>
        </Flex>
      }
    >
      <Box pt={4}>
        <OEvent {...eventDefaultValue} />
        <OEvent {...eventDefaultValue} />
        <OEvent {...eventDefaultValue} />
        <OEvent {...eventDefaultValue} />
        <OEvent {...eventDefaultValue} />
      </Box>
    </OLayout>
  );
}

export default Page;
