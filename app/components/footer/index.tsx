"use client";

import { marginX } from "@/app/constants";
import {
  Box,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CiTwitter } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

const icons = [
  {
    id: 1,
    name: "facebook",
    icon: FiFacebook,
  },
  {
    id: 2,
    name: "Twitter",
    icon: CiTwitter,
  },
  {
    id: 3,
    name: "Instagram",
    icon: AiFillInstagram,
  },
];

const Footer = () => {
  return (
    <Box bg="brand.black">
      <SimpleGrid marginX={marginX} gap={6}>
        <Stack>
          <Heading>SoundDzing</Heading>
          <Flex>
            {icons.map((icon) => (
              <Box key={icon.id}>
                <Icon as={icon.icon} h="100%" width="100%" />
              </Box>
            ))}
          </Flex>
        </Stack>
        <Stack>
          <Heading>Quick Links</Heading>
          <Text>Blog</Text>
          <Text>Privacy policy</Text>
        </Stack>
        <Stack>
          <Heading>Contact Us</Heading>
          <Text>contact@gmail.com</Text>
          <Text>_254797153028</Text>
        </Stack>
      </SimpleGrid>
      <Flex>
        This website is designed by Douglas Obara © 2023. Developed with{" "}
        <Icon as={FaHeart} /> by{" "}
        <Link href="https://github.com/bonface221">bonface221</Link>
      </Flex>
    </Box>
  );
};

export default Footer;
