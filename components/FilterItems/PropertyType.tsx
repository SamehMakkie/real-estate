import React from "react";
import { HStack, Icon, Select, Text } from "@chakra-ui/react";
import { FiType } from "react-icons/fi";

const PropertyType = () => {
  return (
    <>
      <HStack w="100%" spacing={3}>
        <Icon as={FiType} boxSize="8" />
        <Text>Property Type</Text>
      </HStack>
      <HStack w="100%" spacing={3}>
        <Select placeholder="Property type">
          <option value="0">Commercial</option>
          <option value="1">Land</option>
          <option value="2">Residential</option>
        </Select>
      </HStack>
    </>
  );
};

export default PropertyType;
