import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useAuth } from "../../../context/AuthContext";
import { useRouter } from "next/router";
import axios from "axios";
import { auth } from "../../../config/firebase";

export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { user, signup, updateUserProfile } = useAuth();
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSignup = async () => {
    const name = nameRef.current?.value;
    const surname = surnameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (name && surname && email && password) {
      try {
        await signup(email, password);
        await updateUserProfile(
          name + " " + surname,
          "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
        );
        const token = await user.getIdToken();
        await axios.post(
          "http://localhost:5001/api/setCustomClaims",
          {
            idToken: token,
          }
        );
        console.log("Claims")
        const tokenResult = await user.getIdTokenResult();
        console.log(tokenResult);
        router.push("/");
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to post your estate ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" ref={nameRef} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" ref={surnameRef} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <InputGroup>
                <InputLeftAddon>@</InputLeftAddon>
                <Input
                  type="email"
                  placeholder="john-doe@email.com"
                  ref={emailRef}
                />
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  ref={passwordRef}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSignup}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
