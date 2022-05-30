import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
  const router = useRouter();
  const { user, login } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [ invalidInput, setInvalidInput ] = useState<boolean | undefined >(false);

  const handleLogin = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email && password) {
      try {
        const userCred = await login(email, password);
        console.log("/////////////");
        const tokenResult = await userCred.user.getIdTokenResult();
        console.log(tokenResult);
        console.log("////////////");
        
        setInvalidInput(true);
        router.push("/");
        
      } catch (err) {
        setInvalidInput(true);
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
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to post your <Link color={"blue.400"}>estate </Link> for sale ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isInvalid={invalidInput}>
                <FormLabel>Email address</FormLabel>
                <Input type="email" ref={emailRef} />
              </FormControl>
              <FormControl id="password" isInvalid={invalidInput}>
                <FormLabel>Password</FormLabel>
                <Input type="password" ref={passwordRef} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  onClick={handleLogin}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
  );
}
