import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { eventDefaultValue, OEvent } from "../../components/OEvent.component";
import { OLayout } from "../../components/OrganizerLayout.component";
// import { API_URL } from "../../constants";

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

// export async function getServerSideProps() {
//   const { data } = await (await fetch(`${API_URL}/api/events?userId=9`)).json();
//   console.log(data)
//   return {
//     props: {

//     }
//   }
// }

export default Page;
