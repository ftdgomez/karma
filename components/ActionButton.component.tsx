import React from "react";
import { ChakraProps, Square } from "@chakra-ui/react";

interface Props extends ChakraProps {
  children: React.ReactNode;
  onClick?: () => void;
  as?: "button" | "a" | "div";
}


export const ActionButton = ({ children, onClick, as, ...props }: Props) => {
  return (
    <Square
      as={as || 'button'}
      onClick={onClick}
      cursor="pointer"
      transition="all .4s ease"
      _hover={{
        bg: "gray.100",
      }}
      fontSize="19px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      {children}
    </Square>
  );
};
