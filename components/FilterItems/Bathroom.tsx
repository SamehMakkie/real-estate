import React from "react";
import { HStack, Icon, Input, Text } from "@chakra-ui/react";
import { FaBath } from "react-icons/fa";

const Bathroom: React.FC = () => {
  return (
    <>
      <HStack w="100%" spacing={3}>
        <Icon as={FaBath} boxSize="8" />
        <Text>Bathrooms</Text>
      </HStack>
      <HStack w="100%" spacing={3}>
        <Input type={"number"} placeholder="1" />
        <Text>-</Text>
        <Input type={"number"} placeholder="9" />
      </HStack>
    </>
  );
};

export default Bathroom;
