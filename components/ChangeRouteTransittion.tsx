import { Box } from "@chakra-ui/react";

export const ChangeRouteTransition = () => {
  return (
    <Box
      zIndex={9999999}
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100vh"
    />
  );
};
