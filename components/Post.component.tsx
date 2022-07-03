import { useState } from "react";
import { Box, Button, Collapse, Grid, Text } from "@chakra-ui/react";
import { BiChevronDown, BiChevronUp, BiHeart } from "react-icons/bi";
import { ActionButton } from "./ActionButton.component";
import { FaRegCommentDots } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export const Post = ({
  e
}:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const description = e.description;
  const text1 = description.slice(0, 100);

  return (
    <Box mb={6} bg="white">
      <Box
        position="relative"
        minH="260px"
        bgImage={e.image?.length > 0 ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${e.image[0]}` : `https://picsum.photos/id/${e.id + 500}/400/400`}
        bgPosition="center"
        bgSize="cover"
      >
        <Box
          bg="rgba(0,0,0,0.7)"
          color="white"
          fontWeight={500}
          fontSize="sm"
          p={2}
        >
          {e.date}
        </Box>
      </Box>
      <Grid templateColumns="1fr .4fr">
        <Box p={4}>
          <Text fontWeight="bold" fontSize="2xl">
            {e.title}
          </Text>
        </Box>
        <Box>
          <Button px={4} mr={4} mt={8} bg={e.type !== 'event' ? 'red.600' : '#1994d7'} color="white">
            {e.type === 'event' ? 'Participar' : 'Donar'}
          </Button>
        </Box>
      </Grid>
      {!isOpen && (
        <Text mt={3} px={4}>{text1.slice(0, !isOpen ? 100 : undefined)}...</Text>
      )}
      <Collapse in={isOpen}>
        <Box px={4} pb={4} mt={3}> 
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
