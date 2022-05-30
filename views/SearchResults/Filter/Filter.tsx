import React from "react";
import { Heading, VStack } from "@chakra-ui/react";
import Bedroom from "../../../components/FilterItems/Bedroom";
import Bathroom from "../../../components/FilterItems/Bathroom";
import PropertyType from "../../../components/FilterItems/PropertyType";
import PropertySize from "../../../components/FilterItems/PropertySize";
import LotSize from "../../../components/FilterItems/LotSize";
import PriceRange from "../../../components/FilterItems/PriceRange";

const Filter: React.FC = () => {
  return (
    <VStack
      w="100%"
      p={6}
      spacing={5}
      alignItems="start"
      bg={"teal.600"}
      rounded={"xl"}
      boxShadow={"lg"}
      color={"white"}>
      <Heading as={"h3"}>Filter</Heading>
      <VStack w="100%" spacing={3}>
        <Bedroom />
        <Bathroom />
        <PropertyType />
        <PropertySize />
        <LotSize />
        <PriceRange />
      </VStack>
    </VStack>
  );
};

export default Filter;
