import { Box } from "@chakra-ui/react";

export const ChangeRouteTransition = ({ loading }: any) => {
  return (
    <Box
      className={`transition ${loading ? "enterTransition" : "outTransition"}`}
      bg="white"
      zIndex={9999999}
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100vh"
    />
  );
};
