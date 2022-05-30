import { Heading, HStack, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import Footer from "../../views/navigation/Footer/Footer";
import Navbar from "../../views/navigation/Navbar/Navbar";
import NewPropertyForm from "../../views/NewPropertyForm/NewPropertyForm";
import PropertyList from "../../views/user/PropertyList/PropertyList";

const Properties: NextPage = () => {
  return (
    <VStack px={16} spacing={10}>
      <Navbar />
      <Heading>My Properties</Heading>
      <NewPropertyForm />
      <HStack w="100%" spacing={10}>
        <PropertyList />
      </HStack>
      <Footer />
    </VStack>
  );
};

export default Properties;
