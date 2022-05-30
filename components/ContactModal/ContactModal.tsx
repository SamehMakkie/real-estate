import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Icon,
  Heading,
  useDisclosure,
  Flex,
  HStack,
} from "@chakra-ui/react";
import { BsCurrencyDollar } from "react-icons/bs";
import { PhoneIcon } from "@chakra-ui/icons";

interface Props {
  price: number;
  phone: string;
}

const ContactModal: React.FC<Props> = ({ price, phone }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        colorScheme="teal"
        w="100%"
        leftIcon={<Icon as={BsCurrencyDollar} />}
        onClick={onOpen}>
        {price}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack justifyContent={"center"} alignItems="center" spacing={3}>
              <PhoneIcon boxSize={"32px"} />
              <Heading>{phone}</Heading>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactModal;
