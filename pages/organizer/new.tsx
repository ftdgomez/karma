import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { FormInput } from "../../components/FormControl.component";
import { OLayout } from "../../components/OrganizerLayout.component";

function Page() {
  const initialValue: AppEvent = {
    title: "",
    description: "",
    date: "",
    duration: 2,
    location: "",
    image: [] as string[],
    tags: [] as string[],
    requirements: "",
    limitPerson: 0,
  };

  const [values, setValues] = useState<AppEvent>(initialValue);

  return (
    <OLayout
      header={
        <Flex
          justifyContent="space-between"
          alignItems="center"
          p={3}
          borderBottom="1px solid #e1e1e1"
        >
          <Text fontSize="24px" mb={2} fontWeight="bold">
            Publicar Evento
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
      <Box p={4}>
        <FormInput
          label="Nombre del evento"
          type="text"
          placeholder="Nombre del evento"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          required
        />

        <FormInput
          label="Descripción"
          type="textarea"
          placeholder="detalles del evento"
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
          required
        />

        <FormInput
          label="Fecha"
          type="date"
          onChange={(e) => setValues({ ...values, date: e.target.value })}
          required
        />

        <FormInput
          label="Tags"
          type="text"
          onChange={(e) =>
            setValues({ ...values, tags: e.target.value.split(" ") })
          }
          required
        />

        <FormInput
          label="Lugar"
          type="text"
          onChange={(e) => setValues({ ...values, location: e.target.value })}
          required
        />

        <p>file upload...</p>

        <FormInput
          label="Requisitos"
          type="textarea"
          placeholder="requisitos del evento"
          onChange={(e) =>
            setValues({ ...values, requirements: e.target.value })
          }
          required
        />

        <FormInput
          label="Limite de personas"
          type="number"
          placeholder="0"
          onChange={(e) =>
            setValues({ ...values, requirements: e.target.value })
          }
          required
          helperText="Dejar en cero si no hay limite"
        />
        <Button colorScheme="telegram" w="100%">
          Crear Evento
        </Button>
      </Box>
    </OLayout>
  );
}

export default Page;
