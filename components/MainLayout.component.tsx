import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Navbar } from "./Navbar.component";

export const MainLayout = ({
  children,
  header,
}: {
  children: ReactNode;
  header?: ReactNode;
}) => {
  return (
    <Flex h="100vh" flexDir="column" justifyContent="space-between">
      {header}
      <Box bg="gray.100" flex={1} overflow="auto">
        {children}
      </Box>
      <Navbar />
    </Flex>
  );
};
