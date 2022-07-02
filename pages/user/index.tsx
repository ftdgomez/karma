import { Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import { MainLayout } from "../../components/MainLayout.component";
import { Post } from "../../components/Post.component";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Center py={3} bg="#1994d7">
        <Image alt="Karma Logo" src="/logo.png" width="240px" height="64px" />
      </Center>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
};

export default Home;
