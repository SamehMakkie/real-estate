import React from "react";
import { HStack, Icon, Input, Text } from "@chakra-ui/react";
import { BsHouseFill } from "react-icons/bs";

const PropertySize: React.FC = () => {
  return (
    <>
      <HStack w="100%" spacing={3}>
        <Icon as={BsHouseFill} boxSize="8" />
        <Text>Property size (m<sup>2</sup>)</Text>
      </HStack>
      <HStack w="100%" spacing={3}>
        <Input type={"number"} placeholder="50" />
        <Text>-</Text>
        <Input type={"number"} placeholder="1000" />
      </HStack>
    </>
  );
};

export default PropertySize;
