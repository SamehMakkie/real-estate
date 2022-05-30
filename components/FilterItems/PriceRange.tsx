import React from "react";
import { HStack, Icon, Input, Text } from "@chakra-ui/react";
import { BsCurrencyDollar } from "react-icons/bs";

const PriceRange: React.FC = () => {
  return (
    <>
      <HStack w="100%" spacing={3}>
        <Icon as={BsCurrencyDollar} boxSize="8" />
        <Text>Price Range (USD $)</Text>
      </HStack>
      <HStack w="100%" spacing={3}>
        <Input type={"number"} placeholder="50" />
        <Text>-</Text>
        <Input type={"number"} placeholder="1000000" />
      </HStack>
    </>
  );
};

export default PriceRange;
