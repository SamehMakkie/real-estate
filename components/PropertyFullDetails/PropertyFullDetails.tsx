import React from "react";
import {
  VStack,
  Heading,
  useColorModeValue,
  SimpleGrid,
  HStack,
  Icon,
  Button,
  Text,
} from "@chakra-ui/react";
import { AiFillBoxPlot } from "react-icons/ai";
import { BsHouseFill, BsCurrencyDollar } from "react-icons/bs";
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import PropertyType from "../FilterItems/PropertyType";
import ContactModal from "../ContactModal/ContactModal";

interface Props {
  property: PropertyType;
}

interface PropertyType {
  id: string;
  shortAddress: string;
  fullAddress: string;
  city: string;
  numOfBedrooms: number;
  numOfBathrooms: number;
  propertySize: number;
  lotSize: number;
  price: number;
  phone: string;
  images: string[];
}

const PropertyFullDetails: React.FC<Props> = ({ property }) => {
  return (
    <VStack w="100%" h="100%" spacing={4} alignItems="start">
      <VStack py={12} px={6} w="100%" spacing={8} alignItems="start">
        <VStack w="100%" spacing={4} alignItems="start">
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "4xl" }}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            textAlign={"center"}>
            {property.shortAddress}
          </Heading>
          <Text color={"blackAlpha.600"}>{property.city}</Text>
        </VStack>
        <SimpleGrid w="100%" columns={2} spacing={10} textAlign="start">
          <HStack w="100%" spacing={3}>
            <Icon as={IoBed} boxSize="8" />
            <Text>{property.numOfBedrooms}</Text>
          </HStack>
          <HStack w="100%" spacing={3}>
            <Icon as={FaBath} boxSize="8" />
            <Text>{property.numOfBathrooms}</Text>
          </HStack>
          <HStack w="100%" spacing={3}>
            <Icon as={BsHouseFill} boxSize="8" />
            <Text>
              {property.propertySize} m<sup>2</sup>
            </Text>
          </HStack>
          <HStack w="100%" spacing={3}>
            <Icon as={AiFillBoxPlot} boxSize="8" />
            <Text>{property.lotSize} acres</Text>
          </HStack>
        </SimpleGrid>
        <Text color={"blackAlpha.600"}>{property.fullAddress}</Text>
      </VStack>
      <ContactModal price={property.price} phone={property.phone} />
    </VStack>
  );
};

export default PropertyFullDetails;
