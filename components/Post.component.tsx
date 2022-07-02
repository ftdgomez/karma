import { useState } from "react";
import { Box, Button, Collapse, Grid, Text } from "@chakra-ui/react";
import { BiChevronDown, BiChevronUp, BiHeart } from "react-icons/bi";
import { ActionButton } from "./ActionButton.component";
import { FaRegCommentDots } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export const Post = () => {
  const [isOpen, setIsOpen] = useState(false);
  const description = `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi eu consectetur consectetur, nisl
            nisi consectetur nisl, eu consectetur nisl nisi euismod nisl.
                `;
  const text1 = description.slice(0, 100);
  const getRandomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <Box mb={6} bg="white">
      <Box
        minH="260px"
        bgImage={`https://picsum.photos/id/${getRandomNumberBetween(
          1,
          10
        )}/400/400`}
      />
      <Grid templateColumns="1fr .4fr">
        <Box p={4}>
          <Text fontWeight="bold" fontSize="2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Box>
        <Button px={4} mr={4} mt={8} bg="#1994d7" color="white">
          Participar
        </Button>
      </Grid>
      {!isOpen && (
        <Text px={4}>{text1.slice(0, !isOpen ? 100 : undefined)}...</Text>
      )}
      <Collapse in={isOpen}>
        <Box px={4} pb={4}>
          {description}
        </Box>
      </Collapse>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        w="100%"
        mt={2}
        textAlign="center"
        bg="white !important"
        color="gray.400"
      >
        Ver {isOpen ? "menos" : "mas"}{" "}
        {isOpen ? <BiChevronUp /> : <BiChevronDown />}
      </Button>
      <Grid py={4} templateColumns="1fr 1fr 1fr">
        <ActionButton w="100%">
          <BiHeart />
        </ActionButton>

        <ActionButton w="100%">
          <FaRegCommentDots />
        </ActionButton>

        <ActionButton w="100%">
          <FiSend />
        </ActionButton>
      </Grid>
    </Box>
  );
};
