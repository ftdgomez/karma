import { Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { MainLayout } from "../../components/MainLayout.component";
import { Post } from "../../components/Post.component";
import { API_URL } from "../../constants";

const Home: NextPage = ({ data }: any) => {
  return (
    <MainLayout>
      <Center py={3} bg="#1994d7">
        <Image alt="Karma Logo" src="/logo.png" width="240px" height="64px" />
      </Center>
      {
        data.map((event:any) => (
          <Post key={event.id} e={event} />
        ))
      }
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const { data, error } = await (await fetch(`${API_URL}/events`)).json();
  return {
    props: {
      data,
      error,
    },
  };
}

export default Home;
