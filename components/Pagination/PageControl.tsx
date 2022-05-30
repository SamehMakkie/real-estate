import React from "react";
import { Button, Flex, Icon, Link, useColorModeValue } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { HiDotsHorizontal } from "react-icons/hi";

export default function PageControl() {
  return (
    <Flex
      w="full"
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Pagination/>
    </Flex>
  );
}
function Pagination(){
  const PagButton = (props: any) => {
    const activeStyle = {
      bg: "teal.500",
      color: "white",
    };
    return (
      <Button
        mx={1}
        px={4}
        py={2}
        rounded="md"
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("black", "gray.200")}
        opacity={props.disabled && 0.6}
        _hover={!props.disabled && activeStyle}
        cursor={props.disabled && "not-allowed"}
        {...(props.active && activeStyle)}
      >
        {props.children}
      </Button>
    );
  };
  const MButton = (props: any) => {
    const DoubleArrow = props.left ? ArrowLeftIcon : ArrowRightIcon;
    const [hovered, setHovered] = React.useState(false);
    const hoverColor = useColorModeValue("brand.800", "brand.700");
    const unHoverColor = useColorModeValue("gray.100", "gray.200");

    return (
      <Link
        w={8}
        py={2}
        color={useColorModeValue("gray.700", "gray.200")}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        cursor="pointer"
        textAlign="center"
      >
        {hovered ? (
          <Icon
            as={DoubleArrow}
            boxSize={3}
            cursor="pointer"
            color={hoverColor}
          />
        ) : (
          <Icon
            as={HiDotsHorizontal}
            color={unHoverColor}
            boxSize={4}
            opacity={0.5}
          />
        )}
      </Link >
    );
  };
  return (
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <PagButton>
          <Icon
            as={IoIosArrowBack}
            color={useColorModeValue("gray.700", "gray.200")}
            boxSize={4}
          />
        </PagButton>
        <PagButton>1</PagButton>
        <MButton left />
        <PagButton>5</PagButton>
        <PagButton>6</PagButton>
        <PagButton active>7</PagButton>
        <PagButton>8</PagButton>
        <PagButton>9</PagButton>
        <MButton right />
        <PagButton>50</PagButton>
        <PagButton>
          <Icon
            as={IoIosArrowForward}
            color={useColorModeValue("gray.700", "gray.200")}
            boxSize={4}
          />
        </PagButton>
      </Flex>
    </Flex>
  );
};

