import React from "react";
import {
  Image,
  Button,
  HStack,
  Flex,
  VStack,
  Divider,
  useMediaQuery,
  Avatar,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  MenuDivider,
} from "@chakra-ui/react";
import Link from "next/link";
import { useAuth } from "../../../context/AuthContext";

const Navbar: React.FC = () => {
  const [isMobile] = useMediaQuery("(max-width: 992px)");
  const { user, logout } = useAuth();
  console.log(user?.uid);
  
  
  const use = {
    id: 1,
    name: "John Doe",
    avatar:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
  };

  return (
    <VStack w="100%" py={3} spacing={3}>
      <Flex w="100%" justifyContent="space-between">
        <Link href="/">
          <Image
            h="46px"
            src="https://cdn.dribbble.com/users/623359/screenshots/13230768/media/a65ebdd638bc846d4a9a10a4413b3690.png?compress=1&resize=400x300&vertical=top"
            alt="logo"
            cursor={"pointer"}
          />
        </Link>

        {user ? (
          <Menu>
            <MenuButton>
              <Avatar name={user.displayName} src={user.photoURL} size="sm" />
            </MenuButton>
            <MenuList>
              <Link href="/user/profile">
                <MenuItem>Profile</MenuItem>
              </Link>
              <Link href="/user/properties">
                <MenuItem>My Properties</MenuItem>
              </Link>
              <MenuDivider />
              <MenuItem onClick={() => logout()}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <HStack spacing={2}>
            <Link href="/login">
              <Button variant="ghost">Sign in</Button>
            </Link>
            {!isMobile && (
              <Link href="/signup">
                <Button colorScheme={"teal"}>Sign up</Button>
              </Link>
            )}
          </HStack>
        )}
      </Flex>
      <Divider />
    </VStack>
  );
};

export default Navbar;
