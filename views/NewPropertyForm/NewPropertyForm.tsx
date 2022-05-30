import {
  Text,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Textarea,
  VStack,
  Button,
  Flex,
  Stack,
  chakra,
  Icon,
  useColorModeValue,
  VisuallyHidden,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const NewPropertyForm: React.FC = () => {
  const inputImages = useRef<HTMLInputElement>(null);
  const shortAddress = useRef<HTMLInputElement>(null);
  const fullAddress = useRef<HTMLTextAreaElement>(null);
  const select = useRef<HTMLSelectElement>(null);
  const bedrooms = useRef<HTMLInputElement>(null);
  const bathrooms = useRef<HTMLInputElement>(null);
  const propertySize = useRef<HTMLInputElement>(null);
  const lotSize = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const [isMissing, setIsMissing] = useState(false);
  const [inputFiles, setInputFiles] = useState<File[]>([]);

  const triggerFileUpload = () => {
    if (inputImages.current) {
      inputImages.current.click();
    }
  };

  const handleImageChange = ({
    currentTarget: { files },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (files && files.length) {
      setInputFiles((existing) => existing.concat(Array.from(files)));
    }
  };

  const onSubmit = () => {
    console.log(inputFiles);

    if (
      shortAddress.current?.value &&
      select.current?.value &&
      fullAddress.current?.value &&
      bedrooms.current?.value &&
      bedrooms.current?.value &&
      bathrooms.current?.value &&
      propertySize.current?.value &&
      lotSize.current?.value &&
      price.current?.value
    ) {
      setIsMissing(false);
      console.log();
    } else {
      setIsMissing(true);
    }
  };

  return (
    <>
      {isMissing && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Could not Add!</AlertTitle>
          <AlertDescription>
            One or more fields are missing. Please fill out all fields.
          </AlertDescription>
        </Alert>
      )}
      <VStack
        w="100%"
        px="5"
        py={5}
        spacing={10}
        bgColor="teal.500"
        color={"white"}
        rounded="2xl">
        <FormControl isRequired>
          <VStack py={3} alignItems="start">
            <FormLabel>Short Address</FormLabel>
            <Input
              type="text"
              ref={shortAddress}
              placeholder="Short Address"
              w="100%"
            />
          </VStack>
          <VStack py={3} alignItems="start">
            <FormLabel>Full Address</FormLabel>
            <Textarea ref={fullAddress} placeholder="Full Address" />
          </VStack>
          <VStack py={3} alignItems="start">
            <FormLabel>Property Type</FormLabel>
            <Select w="auto" ref={select} placeholder="Select option">
              <option value="0">Commercial</option>
              <option value="1">Land</option>
              <option value="2">Residential</option>
            </Select>
          </VStack>
          <HStack w="100%" py={3}>
            <VStack spacing={3} w="50%" alignItems="start">
              <FormLabel>Bedroom</FormLabel>
              <Input type={"number"} ref={bedrooms} placeholder="0" />
            </VStack>
            <VStack spacing={3} w="50%" alignItems="start">
              <FormLabel>Bathrooms</FormLabel>
              <Input type={"number"} ref={bathrooms} placeholder="0" />
            </VStack>
          </HStack>
          <HStack w="100%" py={3}>
            <VStack spacing={3} w="50%" alignItems="start">
              <FormLabel>
                Property Size (m<sup>2</sup>)
              </FormLabel>
              <Input type={"number"} ref={propertySize} placeholder="0" />
            </VStack>
            <VStack spacing={3} w="50%" alignItems="start">
              <FormLabel>Lot Size (acre)</FormLabel>
              <Input type={"number"} ref={lotSize} placeholder="0" />
            </VStack>
          </HStack>
          <HStack w="100%" py={3}>
            <VStack spacing={3} w="50%" alignItems="start">
              <FormLabel>Price ($)</FormLabel>
              <Input type={"number"} ref={price} placeholder="0" />
            </VStack>
          </HStack>
          <HStack w="100%" py={3}>
            <Flex
              w="100%"
              mt={1}
              justify="center"
              onClick={triggerFileUpload}
              px={6}
              pt={5}
              pb={6}
              borderWidth={2}
              borderColor={useColorModeValue("gray.300", "gray.500")}
              borderStyle="dashed"
              rounded="md">
              <Stack spacing={1} textAlign="center">
                <Icon
                  mx="auto"
                  boxSize={12}
                  color={useColorModeValue("gray.100", "gray.500")}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true">
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Icon>
                <Flex
                  fontSize="sm"
                  color={useColorModeValue("gray.200", "gray.400")}
                  alignItems="baseline">
                  <chakra.label
                    htmlFor="file-upload"
                    cursor="pointer"
                    rounded="md"
                    fontSize="md"
                    color={useColorModeValue("brand.600", "brand.200")}
                    pos="relative"
                    _hover={{
                      color: useColorModeValue("brand.400", "brand.300"),
                    }}>
                    <span>Upload a file</span>
                    <VisuallyHidden>
                      <input id="file-upload" name="file-upload" type="file" />
                    </VisuallyHidden>
                  </chakra.label>
                  <Text pl={1}>or drag and drop</Text>
                </Flex>
                <Text
                  fontSize="xs"
                  color={useColorModeValue("gray.300", "gray.50")}>
                  PNG, JPG, GIF up to 10MB
                </Text>
              </Stack>
            </Flex>
            <Input
              type="file"
              placeholder="Upload a file"
              ref={inputImages}
              onChange={handleImageChange}
              multiple
              hidden
            />
          </HStack>
        </FormControl>
        <Button w="100%" colorScheme={"blue"} onClick={onSubmit}>
          Add Property
        </Button>
      </VStack>
    </>
  );
};

export default NewPropertyForm;
