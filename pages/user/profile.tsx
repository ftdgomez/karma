import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Grid,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { FormInput } from "../../components/FormControl.component";
import { HistoryItem } from "../../components/HistoryItem.component";
import { MainLayout } from "../../components/MainLayout.component";

const initialValue: UserProfile = {
  banner: "",
  name: "",
  email: "",
  phone: "",
  karma: 0,
  username: "",
  canShowEmail: false,
  canShowPhone: false,
  savedEvents: [] as number[],
};

const Home: NextPage = () => {
  const [username, setUsername] = useState("");
  const [values, setValues] = useState<UserProfile>(initialValue);
  const [editMode, setEditMode] = useState(false);
  const [eventsHistory, setEventsHistory] = useState([]);
  useEffect(() => {
    try {
      const lp = JSON.parse(localStorage.getItem("karma_profile") || "");
      const lu = JSON.parse(localStorage.getItem("karma_user") || "");
      if (lp) {
        setValues(Array.isArray(lp) ? lp[0] : lp);
      }
      if (lu) {
        setUsername(Array.isArray(lu) ? lu[0].username : lu.username);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleLoadHistory = async () => {};
  const inputStyles = {
    border: "none",
    rounded: "none",
    borderBottom: "1px solid #1994d7",
  };
  return (
    <MainLayout>
      <Center flexDir="column" py={4}>
        <Circle
          size="120px"
          bgImage={`https://avatars.dicebear.com/api/jdenticon/${username}.svg`}
        />
        <Text fontWeight="bold" fontSize="24px">
          {username}
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
      <Flex justifyContent="flex-end" px={4}>
        <Button onClick={() => setEditMode(!editMode)} color="#1994d7">
          {editMode ? "Guardar" : "Editar"}
        </Button>
      </Flex>
      <Grid px={4} templateColumns="1fr 1fr">
        <FormInput
          inputStyles={inputStyles}
          value={values.name}
          disabled={!editMode}
          label="Nombre"
          type="text"
          placeholder="Nombre"
          onChange={(e) => setValues({ ...values, name: e.target.value })}
        />

        <FormInput
          inputStyles={inputStyles}
          value={values.phone}
          disabled={!editMode}
          label="Teléfono"
          type="text"
          placeholder="xxx xxx xxx"
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
        />
      </Grid>
      <Box px={4}>
        <FormInput
          value={values.email}
          disabled={!editMode}
          label="Email"
          type="email"
          placeholder="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          inputStyles={inputStyles}
        />

        <FormInput
          inputStyles={inputStyles}
          disabled={!editMode}
          label="Email Público"
          type="switch"
          value={String(values.canShowEmail)}
          onChange={(e) =>
            setValues({ ...values, canShowEmail: e.target.checked })
          }
        >
          <Text>Mostrar email público</Text>
        </FormInput>

        <FormInput
          inputStyles={inputStyles}
          disabled={!editMode}
          label="Eventos público"
          type="switch"
          value={String(values.canShowEvents)}
          onChange={(e) =>
            setValues({ ...values, canShowEvents: e.target.checked })
          }
        >
          <Text>Mostrar Eventos público</Text>
        </FormInput>

        <FormInput
          disabled={!editMode}
          label="Teléfono público"
          type="switch"
          inputStyles={inputStyles}
          onChange={(e) =>
            setValues({ ...values, canShowPhone: e.target.checked })
          }
        >
          <Text>Mostrar teléfono público</Text>
        </FormInput>
      </Box>

      <Box mb={4} px={4}>
        <Text fontWeight="bold" fontSize="24px">
          Logros
        </Text>
      </Box>
      <Button
        mx={4}
        mb={4}
        w="calc(100% - 2rem)"
        colorScheme="telegram"
        onClick={handleLoadHistory}
      >
        Cargar Historial
      </Button>
      {eventsHistory.map((event) => (
        <HistoryItem key={event.id} event={event} />
      ))}
    </MainLayout>
  );
};

export default Home;
