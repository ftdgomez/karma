/* eslint-disable @next/next/no-img-element */
import { Box, Button, Center, chakra, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormInput } from "../components/FormControl.component";
import { API_URL } from "../constants";

interface LoginProps {
  username: string;
  password: string;
  repeatPassword: string;
}

function Page() {
  const initialValue: LoginProps = {
    username: "",
    password: "",
    repeatPassword: "",
  };
  const [login, setlogin] = useState<LoginProps>(initialValue);
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, login);
      if (data) {
        localStorage.setItem("karma_token", data.token);
        localStorage.setItem("karma_user", JSON.stringify(data.user));
        localStorage.setItem("karma_profile", JSON.stringify(data.profile));
        toast({
          title: "Éxito",
          description: "Login correcto",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        router.push("/user");
      }
    } catch (error) {
        console.log('error', error)
        toast({
            title: "Error",
            description: "Usuario o contraseña incorrectos",
            status: "error",
            duration: 9000,
            isClosable: true,
        });
    }
  };
  return (
    <Center bg="blue.400" h="100vh" flexDir="column">
      <Box mb={2} mx={4} maxW="240px">
        <img src="/logo.png" alt="xxx" />
      </Box>
      <chakra.form
        maxW="400px"
        onSubmit={handleSubmit}
        bg="white"
        rounded="md"
        mx={4}
        w="calc(100% - 2rem)"
        p={4}
        my={4}
      >
        <FormInput
          onChange={(e) => setlogin({ ...login, username: e.target.value })}
          label="Nombre usuario"
          type="text"
          placeholder=""
          required
        />

        <FormInput
          onChange={(e) => setlogin({ ...login, password: e.target.value })}
          label="Contraseña"
          type="password"
          placeholder=""
          required
        />

        <Button type="submit" w="100%" colorScheme={"telegram"}>
          Iniciar sesión
        </Button>

        <Link href="/register" passHref>
          <chakra.a
            _hover={{
              textDecoration: "underline",
            }}
            mt={2}
            textAlign="center"
            display="block"
            fontSize="sm"
            color="telegram"
            fontWeight="bold"
            mb={2}
          >
            no tienes una cuenta? Registrate
          </chakra.a>
        </Link>
      </chakra.form>
      <Box maxW="400px" mb={4} textAlign="center">
        <Text color="white">
          Quieres publicar los eventos de tu fundación/ONG? necesitas una{" "}
          <chakra.a
            textDecor={"underline"}
            color="revert-layer"
            href={`mailto:karma@utfcontent.com?subject=${encodeURIComponent(
              "Solicitud cuenta organizador - KARMA"
            )}&body=${encodeURIComponent(
              "Hola, quiero publicar mis eventos en KARMA"
            )}`}
          >
            Cuenta de organizador
          </chakra.a>
        </Text>
      </Box>
    </Center>
  );
}

export default Page;
