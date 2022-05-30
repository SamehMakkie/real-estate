import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { AiFillBoxPlot } from "react-icons/ai";
import { BsHouseFill, BsCurrencyDollar } from "react-icons/bs";

interface ResultProps {
  result: {
    id: string;
    shortAddress: string;
    fullAddress: string;
    city: string;
    numOfBedrooms: number;
    numOfBathrooms: number;
    propertySize: number;
    lotSize: number;
    price: number;
    img: string;
  };
}

const ResultCard: React.FC<ResultProps> = ({ result }) => {
  return (
    <Flex w="100%" alignItems="center" justifyContent="center" cursor={"pointer"}>
      <Box
        w="100%"
        bg={useColorModeValue("white", "gray.800")}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
        _hover={{ bgColor: "gray.100" }}>
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            style={{
              backgroundImage: `url('${result.img}')`,
            }}></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            pb={6}
            fontSize={{ base: "2xl", md: "3xl" }}
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold">
            {result.shortAddress}
          </chakra.h2>
          <VStack w="100%" spacing={3} textAlign="start">
            <HStack w="100%" spacing={3}>
              <Icon as={IoBed} boxSize="8" />
              <Text>{result.numOfBedrooms}</Text>
            </HStack>
            <HStack w="100%" spacing={3}>
              <Icon as={FaBath} boxSize="8" />
              <Text>{result.numOfBathrooms}</Text>
            </HStack>
            <HStack w="100%" spacing={3}>
              <Icon as={BsHouseFill} boxSize="8" />
              <Text>
                {result.propertySize} m<sup>2</sup>
              </Text>
            </HStack>
            <HStack w="100%" spacing={3}>
              <Icon as={AiFillBoxPlot} boxSize="8" />
              <Text>{result.lotSize} acres</Text>
            </HStack>
          </VStack>

          <Button colorScheme="teal" leftIcon={<Icon as={BsCurrencyDollar} />}>
            {result.price}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default ResultCard;
