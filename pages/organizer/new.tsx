// @ts-ignore
import { chakra, Box, Button, Flex, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { FileInput } from "../../components/FileInput.component";
import { FormInput } from "../../components/FormControl.component";
import { OLayout } from "../../components/OrganizerLayout.component";
import { API_URL } from "../../constants";
import { supabase } from "../../supabaseClient";
import { getLocalUser } from "../../utils/getLocalUser";


function generateRandomHash() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function Page() {
  const toast = useToast();
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
    status: false,
    type: "event",
    goal: 0,
  };

  const [values, setValues] = useState<AppEvent>(initialValue);
  const [files, setFiles] = useState<FileList | null>(null);
  const inputStyles = {
    border: "none",
    rounded: "none",
    borderBottom: "1px solid #1994d7",
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const localCredentials: any = getLocalUser();

      let filesUploadedUrls = [];
      if (files) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i] as any;
          const { data, error } = await supabase.storage
            .from("public")
            .upload(`file-${Date.now()}-${generateRandomHash()}`, file);
          console.log("for:error: ", error);
          if (data) {
            filesUploadedUrls.push(data.Key);
          }
        }
      }

      await axios.post(`${API_URL}/events`, {
        document: {
          ...values,
          userId: localCredentials.user.id,
          image: filesUploadedUrls,
        },
        currentUser: {
          ...localCredentials.user,
        },
        token: localCredentials.token,
      });
      toast({
        title: "Evento creado",
        description: "El evento ha sido creado correctamente",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setValues(initialValue);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Hubo un error al crear el evento",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

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
      <chakra.form onSubmit={handleSubmit} p={4}>
        <FormInput
          inputStyles={inputStyles}
          label="Tipo de evento"
          type="select"
          value={values.type}
          options={[
            {
              label: "Evento",
              value: "event",
            },
            {
              label: "Recolecta",
              value: "recollect",
            },
          ]}
          onChange={(e) => setValues({ ...values, type: e.target.value })}
          required
        />

        <FormInput
          inputStyles={inputStyles}
          label="Nombre del evento"
          type="text"
          placeholder="Nombre del evento"
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          required
        />

        <FormInput
          inputStyles={inputStyles}
          label="Descripción"
          type="textarea"
          placeholder="detalles del evento"
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
          value={values.description}
          required
        />

        <FormInput
          label="Fecha"
          type="date"
          onChange={(e) => setValues({ ...values, date: e.target.value })}
          value={values.date}
          inputStyles={inputStyles}
          required
        />

        <FormInput
          label="Tags"
          inputStyles={inputStyles}
          type="text"
          onChange={(e) =>
            setValues({ ...values, tags: e.target.value.split(" ") })
          }
          value={values.tags.join(" ")}
          required
        />

        <FormInput
          label="Lugar"
          type="text"
          inputStyles={inputStyles}
          value={values.location}
          onChange={(e) => setValues({ ...values, location: e.target.value })}
          required
        />

        <FileInput
          label="Fotos"
          onChange={(e) => setFiles(e.target.files)}
          previewFiles={values.image}
          value={files}
          onDeleteFile={() => {}}
        />

        <FormInput
          label="Requisitos"
          type="textarea"
          placeholder="requisitos del evento"
          value={values.requirements}
          inputStyles={inputStyles}
          onChange={(e) =>
            setValues({ ...values, requirements: e.target.value })
          }
          required
        />
        {values.type === "event" ? (
          <FormInput
            label="Limite de personas"
            type="number"
            placeholder="0"
            value={values.limitPerson}
            inputStyles={inputStyles}
            onChange={(e) =>
              setValues({ ...values, limitPerson: e.target.value })
            }
            required
            helperText="Dejar en cero si no hay limite"
          />
        ) : (
          <FormInput
            label="Limite de personas"
            type="number"
            placeholder="0"
            value={values.goal}
            inputStyles={inputStyles}
            onChange={(e) =>
              setValues({ ...values, goal: Number(e.target.value) })
            }
            required
            helperText="Dejar en cero si no hay limite"
          />
        )}

        <Button type="submit" colorScheme="telegram" w="100%">
          Crear Evento
        </Button>
      </chakra.form>
    </OLayout>
  );
}

export default Page;
