import {
  HStack,
  VStack,
  Image,
  Text,
  SimpleGrid,
  Button,
  Icon,
  useColorModeValue,
  Heading,
  GridItem,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiFillBoxPlot } from "react-icons/ai";
import { BsHouseFill, BsCurrencyDollar } from "react-icons/bs";
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import ImageSwiper from "../../components/EstateDetailSwiper/ImageSwiper";
import PropertyFullDetails from "../../components/PropertyFullDetails/PropertyFullDetails";
import Footer from "../../views/navigation/Footer/Footer";
import Navbar from "../../views/navigation/Navbar/Navbar";

const Property: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const property = {
    id: "1",
    shortAddress: "123 Main St",
    fullAddress: "123 Main St",
    city: "Famagusta",
    numOfBedrooms: 3,
    numOfBathrooms: 2,
    propertySize: 150,
    lotSize: 0,
    price: 40000,
    phone: "+90 533 555 3333",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&w=1000&q=80",
      "https://amazingarchitecture.com/storage/files/1/Architecture%20firms/Omid%20Merkan/Bedroom%20Design%20Idea/01-Bedroom-design-Omid-Merkan-Iran.jpg",
      "https://www.thespruce.com/thmb/cImK-yMdhhJsrKQwMWTBmD72E9k=/4500x2531/smart/filters:no_upscale()/r-architecture-TRCJ-87Yoh0-unsplash-bf44b463832b43e58f7352815d166ae4.jpg",
      "https://i0.wp.com/ulaburgiel.com/wp-content/uploads/2018/10/INSTA_Bathroom.jpg?resize=945%2C427&ssl=1",
      "https://www.davincilifestyle.com/wp-content/uploads/2020/09/living-room-with-a-spectacular-view.jpg",
    ],
  };

  return (
    <VStack px={[0,5,16]} spacing={10}>
      <Navbar />
      <SimpleGrid w="100%" columns={[1, 1, 3]} spacing={[0,0,10]}>
        <GridItem colSpan={2}>
          <VStack w="100%" spacing={3}>
            <ImageSwiper images={property.images}/>
          </VStack>
        </GridItem>
        <GridItem w="100%" colSpan={1} justifyContent="center" alignItems={"center"}>
          <PropertyFullDetails property={property}/>
        </GridItem>
      </SimpleGrid>
      <Footer />
    </VStack>
  );
};

export default Property;
