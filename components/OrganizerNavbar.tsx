import { Center, Grid } from "@chakra-ui/react";
import Link from "next/link";
import { BiBuildings } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { ActionButton } from "./ActionButton.component";
import { CgAddR } from "react-icons/cg";

export const ONavbar = () => {
  return (
    <Grid
      h="3.3rem"
      borderTop="1px solid #e1e1e1"
      templateColumns="1fr 1fr 1fr"
    >
      <Link href="/organizer" passHref>
        <Center>
          <ActionButton as="a">
            <FaCalendar />
          </ActionButton>
        </Center>
      </Link>

      <Link href="/organizer/new" passHref>
        <Center>
          <ActionButton as="a">
            <CgAddR />
          </ActionButton>
        </Center>
      </Link>

      <Link href="/organizer/profile" passHref>
        <Center>
          <ActionButton as="a">
            <BiBuildings />
          </ActionButton>
        </Center>
      </Link>
      
      {/*
      TODO: add activity button
      <Link href="/organizer/profile" passHref>
        <Center>
          <ActionButton as="a">
            <BiBuildings />
          </ActionButton>
        </Center>
      </Link> */}

    </Grid>
  );
};
