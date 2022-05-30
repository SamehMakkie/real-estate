import React from "react";
import { HStack, Icon, Input, Text } from "@chakra-ui/react";
import { IoBed } from "react-icons/io5";

const Bedroom: React.FC = () => {
  return (
    <>
      <HStack w="100%" spacing={3}>
        <Icon as={IoBed} boxSize="8" />
        <Text>Bedrooms</Text>
      </HStack>
      <HStack w="100%" spacing={3}>
        <Input type={"number"} placeholder="1" />
        <Text>-</Text>
        <Input type={"number"} placeholder="9" />
      </HStack>
    </>
  );
};

export default Bedroom;
