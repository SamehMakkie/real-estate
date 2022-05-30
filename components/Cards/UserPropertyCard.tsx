import React, { useState } from "react";
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
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

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

const UserPropertyCard: React.FC<ResultProps> = ({ result }) => {
  const [canRedirect, setCanRedirect] = useState(true);
  const router = useRouter();

  const handleCardClick = () => {
    if (canRedirect) {
      router.push(`/property/${result.id}`);
    }
  };

  const handleOnMouseOver = () => {
    setCanRedirect(false);
  };
  const handleOnMouseLeave = () => {
    setCanRedirect(true);
  };

  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="center"
      cursor={"pointer"}
      onClick={handleCardClick}>
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
          <HStack w="100%" pt={10} justifyContent={"center"}>
            <Button
              colorScheme="teal"
              leftIcon={<Icon as={BsCurrencyDollar} />}>
              {result.price}
            </Button>
          </HStack>
        </Box>
        <VStack px={5} spacing={10} justifyContent="center">
          <Flex
            p={3}
            rounded="xl"
            color={"green.400"}
            _hover={{ bgColor: "green.400", color: "white" }}>
            <EditIcon
              boxSize={12}
              color="inherit"
              _hover={{ color: "white" }}
              onMouseOver={handleOnMouseOver}
              onMouseLeave={handleOnMouseLeave}
            />
          </Flex>
          <Flex
            p={3}
            rounded="xl"
            color={"red.400"}
            _hover={{ bgColor: "red.400", color: "white" }}>
            <DeleteIcon
              boxSize={12}
              color="inherit"
              _hover={{ color: "white" }}
              onMouseOver={handleOnMouseOver}
              onMouseLeave={handleOnMouseLeave}
            />
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
};

export default UserPropertyCard;
