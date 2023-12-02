"use client";
import {
  Box,
  IconButton,
  Drawer as D,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

import Link from "next/link";
import { navItems } from "../..";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Icon
        as={RxHamburgerMenu}
        onClick={onOpen}
        w="30px"
        h="30px"
        color="brand.white"
        bg="none"
        _hover={{ background: "none" }}
        aria-label="menu"
      />
      <D isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="brand.pink">
          <DrawerCloseButton
            color="brand.white"
            w="48px"
            h="48px"
            _focus={{
              color: "brand.white",
              boxShadow: "none",
              border: "none",
              outline: "none",
            }}
          />
          <DrawerHeader></DrawerHeader>

          <DrawerBody mt={5}>
            <Stack
              direction="column"
              align="flex-start"
              fontWeight="300"
              lineHeight="44px"
              fontSize="20px"
              color="brand.white"
            >
              {navItems.map((nav) => (
                <Link href={nav.link} key={nav.id}>
                  <Text
                    color="brand.white"
                    fontWeight="400"
                    _hover={{
                      color: "brand.dark",
                      cursor: "pointer",
                    }}
                  >
                    {nav.text}
                  </Text>
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </D>
    </Box>
  );
};

export default MobileNav;
