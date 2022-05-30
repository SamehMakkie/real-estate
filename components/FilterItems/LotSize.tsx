import React from "react";
import { HStack, Icon, Input, Text } from "@chakra-ui/react";
import { AiFillBoxPlot } from "react-icons/ai";

const LotSize: React.FC = () => {
  return (
    <>
      <HStack w="100%" spacing={3}>
        <Icon as={AiFillBoxPlot} boxSize="8" />
        <Text>Lot size (acre)</Text>
      </HStack>
      <HStack w="100%" spacing={3}>
        <Input type={"number"} placeholder="0" />
        <Text>-</Text>
        <Input type={"number"} placeholder="500" />
      </HStack>
    </>
  );
};

export default LotSize;
