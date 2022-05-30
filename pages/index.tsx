import type { NextPage } from "next";
import { Flex, VStack } from "@chakra-ui/react";
import AutoCompleteSearch from "../components/AutoComplete/AutoCompleteSearch";
import Footer from "../views/navigation/Footer/Footer";
import Navbar from "../views/navigation/Navbar/Navbar";

const Home: NextPage = () => {
  return (
    <VStack px={16} spacing={10}>
      <Navbar />
      <Flex
        minH="56vh"
        direction={"column"}
        textAlign="center"
        justifyContent={"center"}>
        <AutoCompleteSearch placeholder="Enter an Address, City, or ID number..." />
      </Flex>
      <Footer />
    </VStack>
  );
};

export default Home;
