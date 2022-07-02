import {
  Box,
  Button,
  Center,
  Circle,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import type { NextPage } from "next";
import { HistoryItem } from "../components/HistoryItem.component";
import { MainLayout } from "../components/MainLayout.component";
import { ActionButton } from "../components/ActionButton.component";
import { BiMenu } from "react-icons/bi";
import { FormInput } from "../components/FormControl.component";

const Home: NextPage = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <MainLayout>
      <Center flexDir="column" py={4}>
        <Circle size="120px" bgImage="https://avatars.dicebear.com/api/jdenticon/aalshlk.svg" />
        <Text fontWeight="bold" fontSize="24px">
          Nombre
        </Text>
        <Text>nombre del rango</Text>
        <Box
          bg="gray.300"
          mt={2}
          rounded="md"
          px={4}
          w="calc(100% - 2rem)"
          mx={4}
        >
          <Box rounded="md" my={2} px={4} py={2} w="70%" bg="blue">
            <Text color="white" fontWeight="bold">
              70%
            </Text>
          </Box>
        </Box>
      </Center>
      <Flex justifyContent="end" px={4}>
        <Button onClick={() => setEditMode(!editMode)} color="#1994d7">
          {editMode ? "Guardar" : "Editar"}
        </Button>
      </Flex>
      <Grid px={4} templateColumns="1fr 1fr">
        <FormInput
          disabled={!editMode}
          label="Nombre"
          type="text"
          placeholder="Nombre"
          onChange={() => {}}
        />

        <FormInput
          disabled={!editMode}
          label="Teléfono"
          type="text"
          placeholder="Nombre"
          onChange={() => {}}
        />
      </Grid>
      <Box px={4}>
        <FormInput
            disabled={!editMode}
            label="Email"
            type="email"
            placeholder="email"
            onChange={() => {}}
        />

        <FormInput
            disabled={!editMode}
            label="Email Público"
            type="switch"
            onChange={() => {}}
        >
            <Text>Mostrar email público</Text>
        </FormInput>

        <FormInput
            disabled={!editMode}
            label="Eventos público"
            type="switch"
            onChange={() => {}}
        >
            <Text>Mostrar email público</Text>
        </FormInput>

        <FormInput
            disabled={!editMode}
            label="Teléfono público"
            type="switch"
            onChange={() => {}}
        >
            <Text>Mostrar teléfono público</Text>
        </FormInput>
      </Box>

      <Box mb={4} px={4}>
        <Text fontWeight="bold" fontSize="24px">
          Logros
        </Text>
      </Box>
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
      <HistoryItem />
    </MainLayout>
  );
};

export default Home;
