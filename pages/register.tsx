/* eslint-disable @next/next/no-img-element */
import { Box, Button, Center, chakra, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormInput } from "../components/FormControl.component";
import { API_URL } from "../constants";

type RegisterRole = "organizer" | "user";

interface RegisterProps extends UserProfile {
  role: RegisterRole;
  password: string;
  repeatPassword: string;
}

function Page() {
  const initialValue: RegisterProps = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    role: "user",
    phone: "",
    username: "",
  };
  const [register, setRegister] = useState<RegisterProps>(initialValue);
  const toast = useToast();
  const checkUserName = () => {
    if (register.username === "") {
      return false;
    }
    if (register.username.length < 3) {
      return "El nombre de usuario debe tener al menos 3 caracteres";
    }
    if (register.username.length > 20) {
      return "El nombre de usuario debe tener menos de 20 caracteres";
    }
    if (register.username.match(/[^a-zA-Z0-9]/)) {
      return "El nombre de usuario solo puede contener letras y números";
    }
    if (register.username.match(/^[0-9]/)) {
      return "El nombre de usuario no puede empezar con un número";
    }
    return false;
  };
  const checkPassowrdMatch = () => {
    if (register.password !== register.repeatPassword) {
      return "Las contraseñas no coinciden";
    }
    return false;
  };
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = checkUserName() || checkPassowrdMatch();
    if (error) {
      toast({
        title: "Error",
        description: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    const { data } = await axios.post(`${API_URL}/auth/register`, register);
    if (data) {
      localStorage.setItem("karma_token", data.token);
      localStorage.setItem("karma_profile", JSON.stringify(data.profile));
      localStorage.setItem("karma_user", JSON.stringify(data.user));
      toast({
        title: "Éxito",
        description: "Usuario registrado correctamente",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      router.push('/user')
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
          onChange={(e) => setRegister({ ...register, name: e.target.value })}
          label="Nombre"
          type="text"
          placeholder="Su nombre"
          required
        />

        <FormInput
          onChange={(e) => setRegister({ ...register, email: e.target.value })}
          label="Email"
          type="email"
          placeholder="Email"
          required
        />

        <FormInput
          onChange={(e) => setRegister({ ...register, phone: e.target.value })}
          label="Teléfono"
          type="text"
          placeholder="xxx xxx xxx"
          required
        />

        <FormInput
          onChange={(e) =>
            setRegister({ ...register, username: e.target.value })
          }
          label="Nombre usuario"
          type="text"
          placeholder="xxx xxx xxx"
          checker={checkUserName}
          required
        />

        <FormInput
          onChange={(e) =>
            setRegister({ ...register, password: e.target.value })
          }
          label="Contraseña"
          type="password"
          placeholder="xxxxxxxxx"
          required
        />

        <FormInput
          onChange={(e) =>
            setRegister({ ...register, repeatPassword: e.target.value })
          }
          label="Repetir Contraseña"
          type="password"
          placeholder="xxxxxxxxx"
          required
        />

        <Button type="submit" w="100%" colorScheme={"telegram"}>
          Registrarse
        </Button>

        <Link href="/login" passHref>
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
            Ya tienes una cuenta? Iniciar Sesión
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
