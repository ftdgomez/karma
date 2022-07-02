import { Box, Center, Grid } from "@chakra-ui/react";
import { BiSearchAlt } from "react-icons/bi";
import { FaCompass, FaUser } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { ActionButton } from "./ActionButton.component";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Grid
      h="3.3rem"
      borderTop="1px solid #e1e1e1"
      templateColumns="1fr 1fr 1fr 1fr"
    >
      <Link href="/" passHref>
        <Center>
          <ActionButton as="a">
            <FaCompass />
          </ActionButton>
        </Center>
      </Link>

      <Link href="/discover" passHref>
        <Center>
          <ActionButton as="a">
            <BiSearchAlt />
          </ActionButton>
        </Center>
      </Link>

      <Link href="/charts" passHref>
        <Center>
          <ActionButton as="a">
            <IoStatsChartSharp />
          </ActionButton>
        </Center>
      </Link>

      <Link href="/profile" passHref>
        <Center>
          <ActionButton as="a">
            <FaUser />
          </ActionButton>
        </Center>
      </Link>
    </Grid>
  );
};
